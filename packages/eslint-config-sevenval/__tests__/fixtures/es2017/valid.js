function a() {
  const a = 2;
  return a + 2;
}

a();

const b = t => t + 2;

b(1);

function wait() {
  return Promise.resolve(3);
}

wait();
