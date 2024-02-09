
const Expense=require('../model/user.js');

exports.addExpenses=async (req,res,next)=>{
	try{
	const amount=req.body.amount;
	const description=req.body.description;
	const category=req.body.category;
	const data=await Expense.create({amount:amount,description:description,category:category});
	res.status(202).json({newExpenses:data});
	}catch(err){console.log(err);}
};

exports.getExpenses=async (req,res,next)=>{
	try{
	const expenses=await Expense.findAll();
	res.status(202).json(expenses);
	}catch(err){console.log(err);}
}

exports.deleteExpense=(req,res)=>{
	try{
	expId=req.params.id;
	console.log(expId);
	Expense.destroy({where:{id:expId}});
	res.sendStatus(200);
	}
	catch(err){
		console.log(err);
	}
}

exports.editExpense=(req,res)=>{
	const expId=req.params.id;
	const amt=req.body.amount;
	const desc=req.body.description;
	const cate=req.body.category;
	Expense.findByPk(expId).then(exp => {
		exp.amount=amt;
		exp.description=desc;
		exp.category=cate;
		return exp.save();
	}).catch((err) => {
		console.log(err);
	});
	
}