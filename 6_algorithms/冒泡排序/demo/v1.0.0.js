
function bubbleSort(arr){
    let len = arr.length
    console.time('冒泡排序耗时');
    for(let i =0;i<len;i++){
        for(let j=0;j<len-1-i;j++){ 
            if(arr[j]>arr[j+1]){  // 相邻元素比对
                let temp = arr[j+1] // 交换元素
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
    }
    console.timeEnd('冒泡排序耗时');
    return arr;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));
//babel-node index.js