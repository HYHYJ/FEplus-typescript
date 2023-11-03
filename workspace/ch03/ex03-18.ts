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
    //User 타입경우 나이출력
    // user안에 age가 있나? User 나이를 빼오고 싶음..
    //조건 식 2개 age가 number인가??

    if('age' in user && typeof user.age === 'number'){
      //(단언구문)User의 user닉네임 가져와줘.
      console.log((user as User).nickname);
    } 
  }

  printUser(kim);
  printUser(lee);
  printUser(hong);
})();