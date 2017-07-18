/**
 * in order to make this work, and do so without js, it is not entirely possible (methinks)
 * to eschew the "id" and "for" unless you want to employ some very hacky solutions
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Accordion = ({ name, value, checked, label, children }) => {
  return (
    <div className={styles.Accordion}>
      <input type="radio" id={name + "_" + value}
        checked={checked} value={value} name={name} />
      <label htmlFor={name + "_" + value} >{label}</label>
      <div>{children}</div>
    </div>
  );
};

const { number, string } = PropTypes;

Accordion.propTypes = {
  label: string,
  name: string.isRequired,
  value: string,
  checked: number,
  children: string,
};

export default Accordion;
