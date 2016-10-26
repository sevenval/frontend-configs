/**
 * in order to make this work, and do so without js, it is not entirely possible (methinks)
 * to eschew the "id" and "for" unless you want to employ some very hacky solutions
 */
import React  from  'react';
import styles from './styles.css';

class Accordion extends React.Component {
  render() {
    return (
      <div className={styles.Accordion}>
        <input type="radio" id={this.props.name + "_" + this.props.value}
          checked={this.props.checked} value={this.props.value} name={this.props.name} />
        <label htmlFor={this.props.name + "_" + this.props.value} >{this.props.label}</label>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

const { number, string } = React.PropTypes;

Accordion.propTypes = {
  label: string,
  name: string.isRequired,
  value: string,
  checked: number,
  children: string,
};

export default Accordion;
