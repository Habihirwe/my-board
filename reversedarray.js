let arr=[1,2,3,4,5,6,7,8,9]
console.log('original',arr)

let reversedarr=[]
for(i=arr.length-1;i>=0;i--){
    reversedarr.push(arr[i])
}
console.log('reversed',reversedarr);