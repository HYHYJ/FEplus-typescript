/* eslint-disable @typescript-eslint/no-inferrable-types */
(()=>{
  //string
  var str: string = 'hello';

  //number
  var age: number = 30;
  //boolean
  var done: boolean = true;
  //object
  var todo: object = {title: "Typescript 공부", done : false}
  //Array
  var items: Array<string> = ["js 공부", 'Ts 공부']
  var todoList: string[] = ['Js 프로젝트', 'Ts 프로젝트']
  //tuple
  var users: [string, number] = ['김철수', 30]

  //any
  var userName: any = '이일구'
  userName = 219;
  //null
  var nullVal = null;
  //undefined
  var undefindVal;

  console.log(str, age, done, todo, items, todoList, users, userName, nullVal, undefindVal);
  console.log(typeof str, typeof age, typeof done, typeof todo, typeof items, typeof todoList, typeof users, typeof userName, typeof nullVal, typeof undefindVal);
  
})();

