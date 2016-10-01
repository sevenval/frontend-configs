function a(a) {
  switch (a) {
    case 1:
      break;
    case 2:
    case 3:
      break;
    default:
      return 2;
  }
}

function c() {
  var a = 1;
  var b = 2;
  var c = 3;
  var d = 4;

  return [a, b, c, d];
}

a();
c();

console.log(ai); // eslint-disable-line no-console
