
console.log( 'Hello World!\n'.repeat(3) )
let count = 0;

function findPerimeter(length, width) {
	console.log ((length * 2) + (width * 2));
}
findPerimeter(3, 2)

function areacircle(r) {
    console.log (Math.PI * r *r); 
    
  }
  areacircle(Math.PI)
function greet(name) {
    console.log("Hi, " + name + "!");
  }
  greet("John");

function calculateRatio(num_1, num_2){
    for(num=num_2; num>1; num--) {
        if((num_1 % num) == 0 && (num_2 % num) == 0) {
            num_1=num_1/num;
            num_2=num_2/num;
        }
    }
    var ratio = num_1+":"+num_2;
    return ratio;
}
const getratio = calculateRatio(2,8);
console.log( getratio );


function Sumsquares(num1,num2){
console.log (num1*num1+num2*num2)
}
const getsquaresum = Sumsquares(10,20)


function product3(num1,num2,num3){
    console.log (num1*num2*num3)
    }
    const getproduct = product3(10,20,5)

function curency(dollars,tenge){
    curency=dollars*tenge
    var curency=curency+"tenge";
    return curency;
   
}
const getcurency = curency(5,470);
console.log( getcurency );

console.log(Math.sign(-3));
console.log(Math.sign(3));

function equality(x, y) {
    if (x ==y ) {
      return true;
    }
  
    return false;
  }
  
  console.log(equality(7, 8));
  console.log(equality(8, 8));

  const numm = prompt("Enter a number: ");
if(numm % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}
const number = prompt("Enter a number: ");
if(number>=0 && number<=1) {
    console.log("The number is in the range from 0 to 1.");
}

else {
    console.log("The number is out of the range from 0 to 1");
}

function maxn(x, y) {
    if (x>y ) {
      return x;
    }
  
    return y;
  }
  
  console.log(maxn(7, 8));
  console.log(maxn(10, 8));

  function max3(x, y,z) {
    if (x>y && x>z) {
      return x;
    }
    if (y>x && y>z){
    return y;}
    else {
        return z;
    }
  }
  
  console.log(max3(7, 8, 6));
  console.log(max3(10, 8,12));

 
  







   





