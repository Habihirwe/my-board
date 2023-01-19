
function pandrome(str){
    var length=str.length;
for(var i=0; i<length/2;i++){
    
    if(str[i]!= str[length-1-i]){
        return false

    }

}
return true;
}
console.log(pandrome("olivier"));