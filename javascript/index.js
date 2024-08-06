//1.Ways too print in javaScript
//console.log("Hello World");
// alert("me");
// document.write("this is document write")
//2.javascript console API
console.log("Hello World", 10, "Anoter log");
console.warn("this is warning")
console.error("this is an error")
//3. javascript Variables
//what are variables? - Containers to store data values
var number1=34;
var number2=56;
console.log(number1+number2);
//4. Data types in javascript
//Number
var num1=455;
var num1=56.76;

//String
var str1="This is a string"
var str2='This is also a string'

//Objects
var marks={
    ravi:34,
    shubhan:78,
    harry:99.977
}
console.log(marks);
//Booleans
var a=true;
var b=false;
console.log(a,b);
// var und=undefined;
var und;
console.log(und);
var n=null;
console.log(n);
/*
At avery high level. there are two types of data types in javaScript
1. Primitive data tyoes:undefined, null, number, sring, boolean, symbol
2. Reference data types":Arrays and Objects
*/
 var arr=[1,2,"bablu",4,5]
 //Opertaors in javascript
 var a=100;
 var b=10;
 console.log("The value of a + b is",a+b);
 console.log("The value of a - b is",a-b);
 console.log("The value of a * b is",a*b);
 console.log("The value of a / b is",a/b);
//Assignment Operators
function avg(a,b){
    return (a+b)/2;
}
c1=avg(4,6);
c2=avg(14,16);
console.log(c1,c2);
var arr=[1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }
// arr.forEach(function(element){
//     console.log(element)
// })
// let j=0;
// const ac=0;
// ac++;
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);
// let myArr=["Fan","Camera",34,null,true];
//Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.unshift("Harry")
// const newLen=myArr.unshift("Harry");
// console.log(newLen);
// console.log(myArr);
let myDate=new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
// function clicked(){
// console.log('The button was clicked')
// }
// window.onload=function(){
//     console.log('The document aws loaded')
// }
// Events in javascript
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
//     console.log('Click hua')
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log('Mouse on Container')
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log('Mouse out of Container');
// })
// let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log('Mouse up when clicked on Container');
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
//     console.log('Mouse down when clicked on Container');
// })
// Arrow Function
// function sum(a,b){
//     return a+b;
// }
sum=(a,b)=>{
    return a+b;
}
logKaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired</b>"
    console.log("I am ur log");
}
// setTimeout and setinterval 
// clr=setTimeout(logKaro,5000); 
// clr=setInterval(logKaro,2000);
// use clearInterval(clr)/clearTimeout to cancel setInterval/setTimeout
//JavaScript locostorge
// localStorage.setItem('name','harry')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();
//json
// obj={name:"harry",length:1,a:{this:"tha\"t"}}
// js=JSON.stringify(obj)
// console.log(typeof js)
// console.log(js)
// parsed=JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//Template literals - Backticks
a=34;
console.log(`this is my ${a}`)