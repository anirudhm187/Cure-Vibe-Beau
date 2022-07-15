const mongoose = require('mongoose');

const DB1 = process.env.DATABASE1;
// const DB2 = process.env.DATABASE2;

mongoose.connect(DB1).then(()=> {
    console.log("connection success for DB1");
}).catch((err)=> console.log('no connection'));

// mongoose.connect(DB2).then(()=> {
//     console.log("connection success for DB2");
// }).catch((err)=> console.log('no connection'));
