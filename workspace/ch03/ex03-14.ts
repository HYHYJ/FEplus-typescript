(()=>{
  var div = document.querySelector('div2');
  //* non null assertion : null아니라고 단언한다!!
  //? 쓰는거 권장하지 않음.
  // div!.innerHTML = 'hello'
  // ?앞이 null이면 뒤에 값이 실행안된다.

    console.log(div);
    //
    if(div !==null ){ //타입가드
      div.innerHTML = 'hello'
    }
    
  // if(div !==null){
    // div.innerHTML = 'hello';
  

})();