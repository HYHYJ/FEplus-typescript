// 인터페이스
// ex01-07.ts 복사
  // 객체 타입 선언
(()=>{

  //⭐interface 객체의 타입 : =과 ; 이 없음
  interface User {
    name: string,
    age: number
  }

  //객체생성
  var kim: User = {name: '김철수', age :  30}
  console.log(kim);
  
  function printuser(user: User):void{

    console.log(user.name, user.age);
    
  }
  printuser(kim)
})();
  
