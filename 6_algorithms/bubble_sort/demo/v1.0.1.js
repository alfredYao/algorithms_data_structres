function bubbleSort(arr){
    console.time('改进后冒泡排序耗时');
    let i = arr.length-1 ;// 初始时，最后位置保持不变

    while(i>0){
        let pos = 0; // 每趟开始时，无记录交换
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                pos=j
                let temp=arr[j];arr[j]=arr[j+1];arr[j+1]=temp
            }
        }
        i=pos;    
    }
    console.timeEnd('改进后冒泡排序耗时');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));