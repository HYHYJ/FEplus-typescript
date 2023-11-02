// ex01-19.ts 복사
(()=>{
  type Readonly = {
    // readonly JS: string;
    // readonly TS: string;
    // readonly REACT: string;
    readonly [lang: string]:string;
  }
  const ClassName: Readonly = {
    JS : 'Javascript',
    TS : 'Typescript',
    REACT : 'React'
    
  }
  function getScheldule(subject: string): string | void{
    if(ClassName.JS = subject){
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    }else if(ClassName.TS === subject){
      return `Typescript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsScheldule = getScheldule(ClassName.JS);
  const tsScheldule = getScheldule(ClassName.TS);

  console.log(jsScheldule,tsScheldule);
  
})();
