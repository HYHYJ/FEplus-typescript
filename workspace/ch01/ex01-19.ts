// ex01-18.ts 복사
(()=>{
  const JS = 'Javascript';
  const TS = 'Typescript';
  const REACT = 'React'
  
  function getScheldule(subject: string): string | void{
    if(JS == subject){
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    }else if(TS === subject){
      return `Typescript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsScheldule = getScheldule(JS);
  const tsScheldule = getScheldule(TS);

  console.log(jsScheldule,tsScheldule);
  
})();


  