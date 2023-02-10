const nums = [3,4,5,6,7,8];
const output = [];

// for(let i=0; i< nums.length; i++){
//     const element = nums[i];
//     const result = element*element;
//     output.push(result);
// }

//console.log(output);

// function square(element){
//     return element*element;
// }

// nums.map(function(element,index,array){
//     console.log(element,index,array);
// })


// const result = nums.map(x => x * x)
// console.log(result);

// const filterNum = nums.filter(x => x > 5);
// console.log(filterNum);

const findNum = nums.find(x => x > 5);
console.log(findNum);