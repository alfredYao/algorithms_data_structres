// 顺序队列实现
function ArrayQueue(){
    let arr = [];
    // 入队操作
    this.push=function(element){
        arr.push(element);
        return true
    }

    //出队操作
    this.pop = function(){
        return arr.shift()
    }
    //获取队首
    this.getFront = function(){
        return arr[0];
    }
    //获取队尾
    this.getRear = function(){
        return arr[arr.length-1]
    }
    // 清空队列
    this.clear = function(){
        arr = []
    }
    // 获取队长
    this.size = function(){
        return length;
    }
}