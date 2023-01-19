function inplacereverse(arr){
    let olivier;
    for(var i=0;i<=arr.length/2;i++){
        olivier=arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=olivier
    }
    return arr;
}
console.log(inplacereverse(arr))