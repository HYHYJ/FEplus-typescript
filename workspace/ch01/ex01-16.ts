// 인터페이스 다중 상속
(function(){

  interface Todo {
    title: string;
    content: string;
  }

  interface Todolist {
    _id: number;
    title: number;//상속되는 값는 이름이 같으면모 같은 타입속성이어야한다.
    done: boolean;
  }

  //인터페이스 다중 상속

  interface TodoInfo extends Todo, Todolist{
    createdAt: Date;
    updatedAt: Date;

  }

  var todo1: Todo = {
    title: '할일1',
    content: '등록할때 사용'
  }

  var todo3: TodoInfo={
    _id: 3,
    title: '할일3',
    content: '시간을 포함한 상세 조회할때 사용',
    done: true,
    createdAt: new Date(),//날짜 각체
    updatedAt: new Date(),
  }
  console.log(todo1, todo3);
})();

