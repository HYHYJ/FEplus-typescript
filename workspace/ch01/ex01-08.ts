// 인터섹션 타입
(()=>{
  type Todo ={
    title: string;
    content : string;
  }
  type TodoInfo = Todo & { //위에 타입이랑 합쳐서 별칭 만들기
    _id: number;
    done: boolean;
  }
  var todo1: Todo = {
    title : '할일1',
    content: '등록할 때 사용.'

  };
  var todo2: TodoInfo = {
    _id:2,
    title: '할일 2',
    content: '상세 조회 시 사용',
    done: true
  }

  console.log(todo1);
  console.log(todo2);
  
})();