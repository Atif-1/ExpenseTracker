const express=require('express');
var  cors= require('cors');
const bodyParser=require('body-parser');

const sequelize=require('./util/database');

const expenseRoute=require('./routes/expenseroute.js');
const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(expenseRoute);

sequelize.sync().then(() => {
	app.listen(2000);
}).catch((err) => {
	console.log(err);
});

