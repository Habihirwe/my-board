const arr=["habihirwe olivier, 22","lill wine, 32","eric mimi, 21","dodos deck, 21","patrick wayne, 32"]
const dert="string";
const cert=dert.split("");

function makeObj(arr){

    var obj={};
    var one;
    
    for(let i=0; i<arr.length;i++){
        one= arr[i].split(" ");
        obj[one[0]]= {second_name: one[1].replace(/,/gi, ""), age: one[2]}
    };
    return obj;
} 

console.log(makeObj(arr))