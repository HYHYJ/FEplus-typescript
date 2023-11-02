// ex01-19.ts 복사
(()=>{
  //* enum :상수(const) 데이터의 집합 타입
  //* 읽기전용
  enum ClassName {
    TS =100,
    JS =201,
    REACT = 300
  }
  function getScheldule(subject: ClassName): string | void{
    if(ClassName.JS == subject){
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    }else if(ClassName.TS === subject){
      return `Typescript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsScheldule = getScheldule(ClassName.JS);
  const tsScheldule = getScheldule(ClassName.TS);

  console.log(jsScheldule,tsScheldule);
  console.log(ClassName);
  
  
})();
