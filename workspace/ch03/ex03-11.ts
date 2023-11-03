(()=>{
  // XXXX
    // var a = 10 as string;
// 사슴보고 동물은 괜찮음
// 아무 의미없는 것
    var a = 10 as any as string
    console.log(a);
    // console.log(a.toLowerCase());

    function getNum(num){
      return num;
    }
    // 리턴 타입이 추론되면 타입 단언을 사용할 필요없음.
    // 리턴 타입이 여러개로 추론되거나 any일 경우 명시적으로 타입을 지정
    // 형변환이 아니라 맞는 타입을 적어줘야한다.
    var returnNum = getNum(3.141592) as number;
    console.log(returnNum.toFixed(2));
    
    var str = getNum('hello') as string;
    console.log(str.toUpperCase());
    
    
})();