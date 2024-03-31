const express = require('express');
const {addCategory, getAllCategories, getCategory, updateCategory, deleteCategory} = require('./controllers/videoCategory.controller')


const app = express ();

app.use(express.json())

app.post('/quizzy/v1/category', addCategory);
app.get('/quizzy/v1/category', getAllCategories);
app.get('/quizzy/v1/category/:id', getCategory );
app.patch('/quizzy/v1/category/:id', updateCategory );
app.delete('/quizzy/v1/category/:id', deleteCategory  );


app.use('*', (req, res, next) => {
    res.status(400).json({
        message: `${req.originalUrl} not found on this server`
    })
})

module.exports = app;