export function sum(data) {
  //다른 모듈에서 가져와서 쓸 수있음.
  return data.a + data.b;
}

export function substract(data) {
  return data.a - data.b;
}

function divide(data) {
  return data.a / data.b;
}

// export default { sum, substract, divide };
