(()=>{
  interface Todo{
    readonly _id: number;
    title: string;
    content: string;
    done?: boolean
  }
  //익명함수 파라미터를 만들수 있음음
  interface Toggle {
    (param1: Todo, param2?: string): void;
  }

  var todo1: Todo = {_id:1, title: '할일1', content: '인터페이스 사용', done: false}
  var todo2: Todo = {_id:2, title: '할일2', content: '인터페이스 사용2'}
  
  var toggleFn: Toggle = function(todo):void{
    todo.done = !todo.done;
  }

  todo1._id = 3;
  todo1.title = '집에가자'

  toggleFn(todo1)
  toggleFn(todo1)
  console.log(todo1);

})();
