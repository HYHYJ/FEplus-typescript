// ex01-21.ts 복사
(()=>{
  //* enum :상수(const) 데이터의 집합 타입
  //* const 붙이면 불필요한 값 안만들고
  const enum ClassName {
    JS = 'Javascript',
    TS = 'TypeScript',
    REACT = "React"
  }
  function getScheldule(subject: ClassName): string | void{
    if(ClassName.JS == subject){
      return `${ClassName.JS} 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    }else if(ClassName.TS === subject){
      return `${ClassName.TS} 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsScheldule = getScheldule(ClassName.JS);
  const tsScheldule = getScheldule(ClassName.TS);

  console.log(jsScheldule,tsScheldule);
  console.log(ClassName);
  
  
})();
