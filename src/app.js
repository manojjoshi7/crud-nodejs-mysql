const express=require('express');
//const bodyParser = require('body-parser');
const path=require('path');
//const morgan=require('morgan');
const mysql=require('mysql');
const myConection=require('express-myconnection'); 
const app=express();
//start importing routers
const customerRoutes=require('./routes/customer');

//end importing routers
//start setting........................
app.set('port',process.env.port || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//end setting..........................
//start middlewares........................
//app.use(morgan('div')); 
app.use(myConection(mysql,{
host:'localhost',
user:'root',
password:'',
port:3306,
database:'crudnodejsmysql'
},'single'));
app.use(express.urlencoded({extended: false}));
//end middlewares..........................
//start routes............................
app.use('/',customerRoutes);
//end routes..............................
//start static files....................
app.use(express.static(path.join(__dirname,'public')));
//end static files
app.listen(app.get('port'),() => {
    console.log('Server listen at 3000 port');
})