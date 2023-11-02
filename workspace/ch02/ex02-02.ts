// ex02-01.js 복사
(() => {
  //* 인터페이스를 넣으면 어떤 값을 쓸수있고 어떤 함수가 있는지 알수있는 길잡이가 된다.
  interface IHightSchool {
    kor: number
    eng: number
    sum(): number
    avg(): number
  }
  class HighSchool implements IHightSchool{
    //* 1. 멤버변수 타입을 정의
    //* 2. 생성자 메세더의 매개변수와 리턴 타입을 정의
    kor: number
    eng: number
    constructor(kor:number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    sum(): number {
      return this.kor + this.eng;
    }
    avg(): number{
      //평균은 소수 첫째 자리에서 반올림
      return Math.round(this.sum() / 2);
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log("평균", s1.avg());

  //잘못된 사용
  s1.eng = 99; //새로운 값 넣으면 안됨.
  console.log("평균", s1.sum() / 2);
})();
