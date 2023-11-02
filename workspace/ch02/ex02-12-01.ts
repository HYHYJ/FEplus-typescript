(()=>{
  interface TodoInfoDetail{
    _id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  //* Pick<>: 지정한 인터페이스에 필요한 속성만 꺼내올수있음.
  type TodoRegist = Pick<TodoInfoDetail, 'title' | 'content'>;
    //* Omit<>: 지정한 인터페이스에 선택한 키만 빼고 새로운 타입 꺼내올수있음.
  type TodoInfo = Omit<TodoInfoDetail, 'createdAt'|'updatedAt'>;
  type TodoList = Omit<TodoInfoDetail, 'content'|'createdAt'|'updatedAt' >;

  var todo1: TodoRegist = {
    title : '할일 1',
    content: '등록에 사용'
  }
  var todo2: TodoInfo = {
    _id: 2,
    title : '할일 2',
    content: '등록에 사용',
    done: true
  }
  var todo3: TodoList = {
    _id: 3,
    title : '할일 3',
    done: false
  }
  console.log(todo1, todo2, todo3);
  
})();