// 객체 타입 선언
(()=>{

  //⭐객체의 타입 선언
  type User ={name: string, age: number};

  //객체생성
  var kim: User = {name: '김철수',age :  30}
  console.log(kim);
  
  function printuser(user: User):void{

    console.log(user.name, user.age);
    
  }
  printuser(kim)
})();