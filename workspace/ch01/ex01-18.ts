(()=>{
  function getScheldule(subject: string): string | void{
    if('Javascript' == subject){
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    }else if('TypeScript' === subject){
      return `Typescript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsScheldule = getScheldule('Javascript');
  const tsScheldule = getScheldule('Typescript');

  console.log(jsScheldule,tsScheldule);
  
})();

