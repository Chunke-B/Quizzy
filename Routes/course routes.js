// const express = require('express');
// const multer = require('multer');
// const courseController = require('../controllers/course.controller');

// const app = express();

// // Multer middleware for handling file uploads
// // const uploadCourse = multer({
// //      dest: 'uploads/' 
// //     });

// app.use(express.json());

// // Route for course upload


// // Set up Multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Specify the destination directory for uploaded files
//   },
//   filename: function (req, file, cb) {
//     // Generate a unique filename for the uploaded file
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix);
//   }
// });

// // Create the Multer instance
// const upload = multer({ storage: storage });

// // Middleware function for handling file upload
// const uploadFile = (req, res, next) => {
//   upload.single('image')(req, res, function (err) {
//     if (err) {
//       // Handle any Multer errors
//       return res.status(400).json({ message: 'File upload failed', error: err.message });
//     }
//     next();
//   });
// };

// app.post('/quizzy/v1/course', upload.single('image'), courseController.upload);

// module.exports = uploadFile;
// module.exports = router;

