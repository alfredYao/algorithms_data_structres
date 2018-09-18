function bubbleSort(arr){
    console.time('继续改进的冒泡排序耗时');
    let low = 0;
    let high = arr.length-1; // 设置变量的初始值
    let tmp,j;
    while(low<high){
        for(j=low;j<high;++j){ // 正向排序，找到最大者
            if(arr[j]>arr[j+1]){
                tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp
            }
        }
        --high;  // 修改 high值，前移一位
        for(j=high;j>low;--j){
            if(arr[j]<arr[j-1]){
                tmp=arr[j];
                arr[j]=arr[j-1]
                arr[j-1]=tmp
            }
        }
        low=low+1
        high=high-1
    }
    console.timeEnd('继续改进的冒泡排序耗时');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));