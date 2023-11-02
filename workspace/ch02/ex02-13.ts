(()=>{
  function echo<T extends string | number >(msg: T): T{
    return msg;
  }

  console.log(echo('hello'));
  console.log(echo(100));
  console.log(echo(new Date())); //맨위 object에서 받는다.
  
})();
