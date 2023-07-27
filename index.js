require('dotenv').config();
const express=require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const connectDB = require('./server/config/db');
const session = require('express-session');
const pasport = require('passport');
const  MongoStore = require('connect-mongo');
const passport = require('passport');
const app =  express();

const port = 4080 || process.env.port;
app.use(session({
    secret:'kittyuser',
    resave:false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl:process.env.MONGODB_URI,
    }),
    //7 Days
    //cookie:{maxAge: new Date(Date.now()+(360000))}
}));
app.use(passport.initialize());
app.use(passport.session());




app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(methodOverride("_method"));

connectDB();

app.use(express.static('public'));

app.use(expressLayouts);

app.set('layout','./layouts/main');
app.set('view engine','ejs');

//Routes
app.use('/',require('./server/Routes/index'));

app.use('/',require('./server/Routes/auth'));

app.use('/',require('./server/Routes/dashboard'));
app.use('*',(req,res)=>{
    res.status(404).render('error');
});
app.listen(port,()=>{
});
//<a href="https://iconscout.com/illustrations/curly" target="_blank">Curly hair man holding smartphone Illustration</a> by <a href="https://iconscout.com/contributors/humaaans">Pablo Stanley</a> on <a href="https://iconscout.com">IconScout</a>