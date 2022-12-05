const express=require('express');
const mycon=require('mysql');
const fileupload=require('express-fileupload');
const cors=require('cors');

const app=express();
app.use(express.urlencoded({extended:true}));
app.use=(express.json());
app.use=(mycon());
app.use=(fileupload());
app.use=(cors());

let a=mycon.createConnect({   
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Divya@divi20",
    database : "registration"
});

a.connect(function(error){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('Database Connected');
    }
});