// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num*2;
const addTwo = (num1,num2) => num1+num2;

const doIt = (num1,num2) => {
    const statement = "Love you "
    console.log(statement + num1);
    console.log(statement + num2);    
}

const result = doubleIt(30);
const result2 = addTwo(187,256);
doIt(2,3);
