/*console.log("Nodejs")
const arr1 = [1,2,3]
const arr2 = [...arr1,4,5]
console.log(arr2)
const user = {name:"ramu"}; 
const updatedUser = {...user, age:22}; 
console.log(updatedUser); 
function sum(...numbers){ 
console.log(numbers); 
} 
sum(1,2,3,4);
function add(...nums){ 
return nums.reduce((a,b)=>a+b); 
} 
console.log(add(1,2,3,4));*/
const arr1=[1,2,3]
const[a,...b]=arr1
console.log(a)
console.log(b)
const obj={
    name:"saniya",
    age:18
}
const{name:n,age:g}=obj
console.log(n)
console.log(a)