(()=>{
  interface Todo{
    _id: string;
    title: string;
    content?: string;
  }

  const todo1:<Todo> ={
    _id : '1',
    title: '제목 1',
    content: '내용1' 
  }
  //! [오류] const todo1:Required<Todo> 이렇게 정의해야 이거 실행가능해!! 너 content 옵셔널로 바꿨자나!!
  console.log(todo1.content.substring(1,2));
  
})();