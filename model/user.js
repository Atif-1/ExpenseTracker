const Sequelize=require('sequelize');

const sequelize=require('../util/database.js');
 
const User=sequelize.define('expenses',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	amount:Sequelize.INTEGER,
	description:{
		type:Sequelize.STRING,
		unique:true
	},
	category:{
		type:Sequelize.STRING,
	}
});
module.exports=User;