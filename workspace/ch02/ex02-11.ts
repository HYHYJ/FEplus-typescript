(()=>{
  //Queue = 선입 선출 FIFO : 빨리온 사람이 빨리 들어갑니다~
  //Stack = 선입 선출 LIFO : 엘리베이터에서 가장 빨리 나올려면 가장 늦게 타야함!~
  class Queue {
    data: string[]= [];
    push(item: string){
      this.data.push(item);
    }
    pop(): string | undefined{
      return this.data.shift();
    }
  }

  var sq = new Queue();
  sq.push('hello');
  sq.push('javascript');
  sq.push('world');
  var s1 = sq.pop();
  var s2 = sq.pop();
  var s3 = sq.pop();
  console.log(s1,s2,s3);
  
})();
