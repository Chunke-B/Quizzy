const express = require('express');
const videoController = require('./../controllers/video.controller');

const router = express.Router();

app.use(express.json())

router.
post('/quizzy/v1/video ',
[
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('categoryId').notEmpty().withMessage('Category ID is required'),
    body(' UserId').notEmpty().withMessage('User ID is required'),
    body('  url').notEmpty().withMessage('url is required'),
  ], videoController.uploadVideo);
router.
put('/quizzy/v1/video:videoId',
[
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('categoryId').notEmpty().withMessage('Category ID is required'),
  ], videoController.modifyVideo);
router.
delete('/quizzy/v1/video :videoId', videoController.deleteVideo);
router.
get('/quizzy/v1/video', videoController.getAllVideos);
router.
get('/quizzy/v1/video :videoId', videoController.getVideo);



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  });
module.exports = router;