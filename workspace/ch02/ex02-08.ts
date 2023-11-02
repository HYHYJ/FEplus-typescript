(()=>{
  //공통의 라이브러리 만들때
  function echo<T>(msg:T):T{
    return msg;
  }

  //우리는 쓰는 방식을 알아두면댐
  const result1:string = echo<string>('hello');
  console.log(result1.substring(1, 3));

  const result2:number = echo<number>(3.141592);
  console.log(result2.toFixed(1))
  
})();
