const express=require('express');

const router=express.Router();

const expenseCntroller=require('../controller/expensesController');

router.post('/add-expense',expenseCntroller.addExpenses);
router.get('/get-expenses',expenseCntroller.getExpenses);
router.delete('/delete-expense/:id',expenseCntroller.deleteExpense);
router.put('/edit-expense/:id',expenseCntroller.editExpense);

module.exports=router;