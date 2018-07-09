// 链式队列
function LinkedQueue(){
    var Node = function(element){
        this.element = element;
        this.next = null;
    }
    var length = 0,
        front, //队首指针
        rear;  //队尾指针
    //入队操作
    this.push=function(element){
        var node = new Node(element)
            current;
        if(length === 0){
            front = node;
            rear = node;
            length ++
            return true;
        }else{
            current = rear;
            current.next = node
            rear = node
            return true
        }
    }
    //出队操作
    this.pop = function(){
        if(!front){
            return 'Queue is null'
        }else{
            var current = front
            front = current.next
            current.next = null
            length --;
            return current
        }
    }
    //获取队首
    this.getFront = function(){
        return front
    }
    //获取队尾
    this.getRear = function(){
        return rear;
    }
    //获取队列存储的元素
    this.toString = function(){
        var str = '',
            current = front;
        while(current){
            str += current.element;
            current = current.next
        }
        return str
    }
}