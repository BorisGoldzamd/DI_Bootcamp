const knex = require('knex');
const db = knex({
    client :'pg',
    connection:{
        host:'127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: '12345',
        database:'postgres'
    }
});

module.exports = { db }
// console.log(db);

// db('products')
//     .select('id','name','price')
//     // .from('products')
//     .then((rows) => {
//         console.log(rows);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// db.raw('select * from products') 
//     .then((data)=>{
//         console.log(data.rows);
//     })
//     .catch((err)=>{
//         console.log(err)
//     });

// db('products')
// //   .insert([{name: 'samsung 26', price: 1900, description: 'not a nice phone'}],
// //   ['id','name'])
// // .update({name:'samsung 34'},['*'])
// // .where({id:2})
// .del(['id','name', 'price'])
// .where({id:1})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

