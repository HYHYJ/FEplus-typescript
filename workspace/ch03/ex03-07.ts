(()=>{
  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  }

  type ArrayUser = {
    [Prop in keyof User]: string[]
  };

  const kim: User = {
    id: 'Kim',
    name: '김철수',
    address: '경기도',
    phone: '0102223333'

  }
  const lee: ArrayUser = {
    id: ['Kim'],
    name: ['김철수'],
    address: ['경기도','서울시'],
    phone: ['0102223333', '1ㅇㄹㄴㅇ']

  }
  console.log(kim, lee);
  
})();