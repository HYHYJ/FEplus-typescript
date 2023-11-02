// ex02-05/math.js 복사
export interface Data {
  //* 인터 페이스도 export 해야함 
  a: number, 
  b: number
}

export function sum(data: Data): number {
  //다른 모듈에서 가져와서 쓸 수있음.
  return data.a + data.b;
}

export function substract(data: Data) {
  return data.a - data.b;
}

function divide(data: Data) {
  return data.a / data.b;
}

export default { sum, substract, divide };
