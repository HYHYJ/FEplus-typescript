(()=>{

  //instanceof : true or false
  console.log(new Function() instanceof Function);
  console.log({} instanceof Object);//T
  console.log([] instanceof Array); //Array를 통해 []이 생성되었나? T
  console.log([] instanceof Object); //객체를 통해 배열이 생성되었나? T
  console.log([] instanceof Date); //F
  console.log([] instanceof Function); //F
  console.log(new Date() instanceof Date); //T
  
  class Todo{
    title: string;
    content: string;
    constructor(title: string, content: string){
      this.title = title;
      this.content = content
    }
    getTitle(){
      return this.title;
    }
  }
  function getTitle(todo: Todo | string[]){
    if(todo instanceof Todo){
      return todo.getTitle;
    }else if(todo instanceof Array){
      return todo[0]
    }
  }

  const todo1 = new Todo('할일1', '내용1')
  const todo2 = ['할일2', '내용2']


  console.log(getTitle(todo1));
  console.log(getTitle(todo2));
  
  
})();
