// 链式栈

function Stack(){
    this.top = null;
    this.size = 0;
}

Stack.prototype = {
    constructor: Stack,
    push:function(data){
        if(data === null){
            return false
        }else{
            let Node = {
                data:data,
                next: null
            };
            Node.next = this.top;
            this.top = Node;
            this.size++;
        }
    },
    pop:function(){
      if(this.size === 0){
          return null;
      }else{
          let data = this.top.data;
          this.top = this.top.next;
          this.size -- ;
          return data;
      }
    }
}

let Stack1  = new Stack();
Stack1.push(1)
Stack1.push(2)
console.log(Stack1)
//Stack { top: { data: 2, next: { data: 1, next: null } }, size: 2 }

Stack1.pop()
console.log(Stack1)

//Stack { top: { data: 1, next: null }, size: 1 }

