//  线性表的顺序存储结构
const MAXSIZE=50
var ERROR = 0;
var OK = 1;

//线性表增加
function ListInsert(arr,location,data){
    if(arr.length===MAXSIZE){
        return ERROR;
    }
    if(location<1 || location>arr.length+1){
        return ERROR;
    }
    if(location<arr.length){
        for(var i = arr.length-1;i>=location;i--){
            arr[i+1]=arr[i]
        }
    }
    arr[location]=data;
    return OK;
}

//删除线性表中的某个元素
function listDelete(arr,location){
    if(arr.length===0){
        return ERROR;
    }
    if(location<1||location>arr.length){
        return error;
    }
    if(location<arr.length){
        for(var i = location;i<arr.length;i++){
            arr[i-1]=arr[i]
        }
    }
    arr.length--;
    return OK;
}

var arrList = [1,2,3,4,5,9,9,9,9];
ListInsert(arrList,2,7)
console.log(arrList)
//[ 1, 2, 7, 3, 4, 5, 9, 9, 9, 9 ]
listDelete(arrList,2)
console.log(arrList)
//[ 1, 7, 3, 4, 5, 9, 9, 9, 9 ]
