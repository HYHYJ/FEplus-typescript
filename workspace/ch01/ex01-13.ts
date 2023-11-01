// index signature, string
//!optional 옵셔널
//* 필수 , 안필수 ->[etc: string]:string;
(()=>{
  interface User{
    name: string;
    email: string;
    age?: number;
    // phone?: string;
    // address?: string;
    // hobby?: string;
    //* 이름은 모르겠고 이름도 문자형이고 값도 문자형이여야한다.
    //? 인덱스 시그니처
    [etc: string]:string | number | undefined;
  }

  var kim: User = {
    name: '김철슈',
    email: 'djklfsd@fdjksdf',
    age: 30,
    phone: '0101111000',
    address: '서울시 어쩌구',
    hobby: '독서'
  }
  var lee: User = {
    age: 30,
    name: '김철슈',
    email: 'djklfsd@fdjksdf',
  }

  console.log(kim);
  
})();

