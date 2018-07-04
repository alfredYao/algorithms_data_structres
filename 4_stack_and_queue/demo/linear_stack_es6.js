/**
 * 栈的顺序存储结构实现-es6 类版本
 */
class Stack{
    constructor(){
        this.items = []
    }
    //入栈
    push(){
        let len = arguments.length
        if(len===0){
            return undefined;
        }
        // 压栈
        for(let i = 0; i<len;i++){
            this.items.push(arguments[i])
        }
    }
    // 出栈
    // 时间复杂度为 O(1)
    pop(){
        return this.items.pop();
    }
    // 返回栈顶元素
    peek(){
        return this.items[this.items.length-1]
    }
    // 栈是否为空
    isEmpty(){
        return this.items.length === 0;
    }
    //清空栈
    clear(){
        this.items = []
    }
    //返回栈
    show(){
        return this.items;
    }
}

let stack = new Stack();
stack.push(1,2,3,4)
console.log(stack.show())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.show())

// [ 1, 2, 3, 4 ]
// 4
// 4
// [ 1, 2, 3 ]