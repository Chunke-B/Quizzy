const express = require('express');
const {addCategory, getAllCategories, getCategory, updateCategory, deleteCategory} = require('./controllers/videoCategory.controller')

// const { }


const app = express ();

app.use(express.json())

app.post('/quizzy/v1/category', addCategory);
app.get('/quizzy/v1/category', getAllCategories);
app.get('/quizzy/v1/category/:id', getCategory );
app.patch('/quizzy/v1/category/:id', updateCategory );
app.delete('/quizzy/v1/category/:id', deleteCategory  );


// app.post('/quizzy/v1/category', addCategory);
// app.get('/quizzy/v1/category', getAllCategories);
// app.get('/quizzy/v1/category/:id', getCategory );
// app.patch('/quizzy/v1/category/:id', updateCategory );
// app.delete('/quizzy/v1/category/:id', deleteCategory  );



// app.post('/quizzy/v1/category', addCategory);
// app.get('/quizzy/v1/category', getAllCategories);
// app.get('/quizzy/v1/category/:id', getCategory );
// app.patch('/quizzy/v1/category/:id', updateCategory );
// app.delete('/quizzy/v1/category/:id', deleteCategory  );


app.use('*', (req, res, next) => {
    res.status(400).json({
        message: `${req.originalUrl} not found on this server`
    })
})

module.exports = app;






// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://chunke135:<password>@cluster0.mbjrcw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
