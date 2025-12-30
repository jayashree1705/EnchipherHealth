// 1.
// var name=prompt("Enter a name:");
// function greeting(){
//     alert("Hi.." +name+ "Welcome")
// }
// greeting();

// 2.
// let num=prompt("Enter a Number:");
// function checker(){
//         if(num%2==0){
//             alert(num+" is even");
//         }
//         else{
//              alert(num+"is odd");
//         }
//     }
// checker();

// 3.
// let n1=Number( prompt("enter a n1"));
// let n2=Number(prompt("enter a n2"));
// let operator=prompt("enter +,-,*,/");
// let res;
// if(operator==="+"){
//     res=n1+n2;
//     alert(res);
// }else if(operator==="-"){
//     res=n1-n2;
// }else if(operator==="*"){
//     res=n1*n2;
// }else if(operator==="/"){
//     res=n1/n2;
// }else{
//     alert("invalid");
// }


// 4.
// let name=prompt("name");
// let age=Number(prompt("age"));
// if(age>=18){
//     alert("eligible");
// }else{
//     alert("Not eligible");
// }

// 5.
// let num=Number(prompt("enter a number"));
// for(let i=1;i<=10;i++){
//     console.log(num+"*"+i+"="+(num*i));
// }

// 6.
// let limit=Number(prompt("enter"));
// function num(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// alert(num(limit));

// 7.
// let password=prompt("enter password");
// if(password.length>=8){
//     alert("valid");
// }
// else{
//     alert("invalid");
// }


// 8.
// let marks=Number( prompt("enter"));
// if(marks>=90){
//     alert("A");
// }
// else if(marks>=80){
//     alert("B");
// }
// else if(marks>=50){
//     alert("c");
// }
// else{
//     alert("fail")
// }


// 9.
// let a=Number(prompt("a"));
// let b=Number(prompt("b"));
// let c=Number(prompt("c"));
// if(a>=b && a>=c){
//     alert("largest is "+a);
// }else if(b>=c && b>=a){
//     alert("largest is "+b);
// }
// else{
//     alert("largest is "+c);
// }


// 10.
// let user="sree"
// let password="sree@123"

// let name=prompt("name");
// let password1=prompt("password");
// if(name==user&&password1==password){
//     alert("login");
// }else{
//     alert("Invalid");
// }


// 11.
// let limit=Number(prompt("enter a num"));
// let count=0;
// for(let i=0;i<=limit;i++){
// if( i%2==0){
//     count++;
// }
// }
// alert(count);


// 12.
// let num=Number(prompt("Enter a number"));
// let rev=0;
// function reverse(num){
//     while(num>0){
//         rev= rev*10+(num%10);
//         num=Math.floor(num/10);
//     }
//     return rev;
// }
// alert(reverse(num));

// 13.
// let p=Number(prompt("enter p"));
// let n=Number(prompt("enter n"));
// let r=Number(prompt("enter r"));
// function simpleinterest(p,n,r){
//     (p*n*r)/100;
//     return (p*n*r)/100;
// }
// let si=simpleinterest(p,n,r);
// alert(si)


// 14.
// let num=13;
// let num1=Number(prompt("enter a num"));
// if(num1>13){
//     alert("too high");
// }
// else if(num1<13){
//      alert("too low");
// }
// else{
//     alert("num is correct");
// }

// 15.
// let num=Number(prompt("enter a num"));
// let count=0;
// for(let i=2;i<num;i++){
//     if(num%i==0){
//        count++;
//        break;
//     }
// }
// if(count==0){
//     alert(" prime")
// }
// else{
//     alert(" not a prime")
// }

// 16.
// let num =Number(prompt("Enter a num"))
// function factorial(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//         fact*=i;
//     }
//     return fact;
// }
// alert(factorial(num));

// 17.
// let num=Number(prompt("enter a num"));
// let count=0;
// while(num!=0){
//     num=Math.floor(num/10);
//     count++;
// }
// alert(count);

// 18.
// let a=Number(prompt("enter a num"));
// let b=Number(prompt("enter a num"));
// let cal=prompt("add,sub,mul")
// switch(cal){
//     case"add":
//     alert(a+b);
//     break;
//      case"sub":
//     alert(a-b);
//      break;
//      case"mul":
//     alert(a*b);
//      break;
// }

// 19.
// let limit=Number(prompt("enter limit"))
// let even=0;
// let odd=0;
// for(let i=1;i<=limit;i++){
//     if(i%2===0){
//         even+=i;
//     }else{
//         odd+=i;
//     }
// }
// alert(even,odd)


// 20.
// let exit=confirm("exit?");

// if(exit){
//     alert("exited")
// }else{
//     alert("not exited")
// }
