/**
 * 栈的顺序存储结构实现
 *
 *
 */
function Stack(){
    this.items = []
    // 初始化栈方法
    if(typeof Stack.prototype.push!=="function"){
        // 压栈
        Stack.prototype.push=function(){
            let len = arguments.length;
            if(len === 0){
                return undefined;
            }
            for(let i=0;i<len;i++){
                this.items.push(arguments[i])
            }
        }
        // 退栈
        Stack.prototype.pop=function(){
            return this.items.pop();
        }
        // 返回栈顶元素
        Stack.prototype.peek = function(){
            return this.items[this.items.length-1]
        }
        // 栈是否为空
        Stack.prototype.isEmpty=function(){
            return this.items.length === 0
        }
        // 清空栈
        Stack.prototype.clear = function(){
            this.items = [];
        }
        // 返回栈
        Stack.prototype.show = function(){
            return this.items
        }
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
