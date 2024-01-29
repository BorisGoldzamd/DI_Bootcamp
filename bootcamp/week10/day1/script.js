function myCallBack(){
    console.log("callback executed!")
};
function excCallBack(func){
    func()
}
excCallBack(myCallBack);


console.log('before');
try {
    x
} catch (error) {
    console.log(error.message);
}
console.log('after');

const p = new Promise((resolve,reject)=>
setTimeout(()=>{
    resolve(5)
},1000));
console.log(p);
p.then((res) =>{
    console.log((res));
})