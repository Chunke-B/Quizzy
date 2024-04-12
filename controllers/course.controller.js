const Course = require('../models/course');

// Controller method to handle course upload
exports.uploadCourse = async (req, res) => {
  try {
    const { DepartmentID, postDate, status, name , CourseId} = req.body;
    const image = req.file.filename;

    const course = new Course({
        DepartmentID,
      postDate,
      status,
      name,
      image,
      CourseId
    });

    await course.save();

    res.status(201).json({ message: 'Course uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};