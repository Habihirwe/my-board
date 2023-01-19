function createNestedObject(arr =[]) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let [names, age] = arr[i].split(', ');
      let [firstName, secondName] = names.split(' ');
  
      obj[firstName] ={
        name:secondName,
        age: age
      }
    }
    console.log(obj) ;
  }
let array = [
    "Martha Iradukunda, 20",
  "Patrick wyne, 30",
  "lil wyne, 32",
  "Eric mimi, 21",
  "Dodos deck, 21",
  "Alian Dwine, 22",
  "Patrick wyne, 33",
  "Patrick wyne, 100",
  "Patrick wyne, 40"
]
createNestedObject(array);