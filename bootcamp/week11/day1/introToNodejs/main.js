// const arr =[1,2,3,4,5];
// arr.forEach((item) =>{
//     console.log(item)
// });

//NodeJS module system - share js files
// 1. create a module and to share
// 2. NPM - node package manager
// 3 core modules- Node JS instalation

function hello(name){
    console.log(`Hello ${name}`)
};

function sayhellotojs(name2){
    console.log(`Hello ${name2}`)
};


const stock = [
    { id: 1, name: "iPhone", price: 700 },
    { id: 2, name: "iPad", price: 600 },
    { id: 3, name: "iWatch", price: 500 },
];
export default stock
// module.exports = {
//     stock
// }