//functions

// function a(parameter){
//     console.log('hello students of javascript')
// }

// //you can call your action a( ) anywhere in the code as much times as you want

// function b(){
//     for (let i=0; i < 10; i ++){
//         a()
//         console.log('this is b function')
//     }
// }

// b()

// function greeting(name, studentsEmail){
//     console.log('Hello, ' + name + ' welcome to our JS lesson' + studentsEmail);
// }
// // greeting('John')
// // greeting('Marry')
// // greeting('Ana')

// const students = ['John', 'Ana', 'Maria','Josefina'];
// const studentsEmail = ['John@gmail.com', 'Ana@gmail.com', 'Maria@gmail.com','Josefina@gmail.com'];
// for (let i=0; i < students.length && i < studentsEmail.length; i++){
//     greeting(students[i], studentsEmail[i])
// }

// function sum (a, b){
//     console.log(a + b)
// }
// sum (10, 15);

// function hello(a, b = "2"){
//     console.log('Hello ' + a + ' and also you '+ b)
// }

// hello('john', 'Boris' )

// //if i dont declare something to B, the = 2 will apear instead. but if I do that in a, i wont be able
// // declaring in the () of the function, will give me a default value.

function printAge(myAge){
    let ageMom = myAge* 2;
    let ageDad = myAge* 1.2;
    ageMom = ageMom.toFixed(0);
    ageDad = ageDad.toFixed(0);
    console.log('my moms age is ' + ageMom + ' my dad age is ' + ageDad);
}
printAge(24);