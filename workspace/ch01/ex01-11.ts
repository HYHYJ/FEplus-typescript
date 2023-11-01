// 클래스의 타입 지정에 인터페이스 사용
(()=>{
  //껍데기
  interface Score {
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
    
  }
  //Score을 class가 구현을 해줌
  class HighSchool implements Score{ // 인스턴스가 가져야할 값들스코어를 참고해라
    kor: number;// class 속성
    eng: number;// class 속성

    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;

    }
    sum(){
      return this.kor + this.eng;
    }
    avg(){
      return this.sum() /2;
    }

  }
  const kim = new HighSchool(100, 90);
  console.log(kim.sum(), kim.avg());
  
})();

