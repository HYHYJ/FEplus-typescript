// ex03-18.ts 복사
(()=>{
  const kim:User ={
    name: '김청후',
    age: 30,
    nickname: '김김'
  };

  const lee: UnknownUser ={
    name: '이영희',
    age: '비공개'
  };

  const hong: AdminUser = {
    name: '홍길동'
  }
  function printUser(user: User | UnknownUser | AdminUser){

    if(isUser(user)){
      //(단언구문)User의 user닉네임 가져와줘.
      console.log(user.nickname);
    } 
  }
  //타입 가드 함수
 // 함수 결과는 user는 User다!!
  function isUser(user: User | UnknownUser | AdminUser): user is User{
    //1. 넌유저야!! 2. 나이타입 3. 이 숫자타입이니?
    return typeof (user as User).age ==='number'
  }

  printUser(kim);
  printUser(lee);
  printUser(hong);
})();