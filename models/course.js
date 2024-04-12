
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    CourseId: {
            type: Number,
            unique: true,
            required: [true, 'A Department must have a a unique user ID']
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'A Department must have a name'],
        },
        DepartmentID:{
            type: mongoose.Types.ObjectId,
            ref: 'Department',
            required: [true, 'Each course must have a Department']
        },
        postDate:{
            Date
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive'],
            default: 'Active',
          },
          image:{
            type: String,
            required: true
        }
    })
    const Course = mongoose.model('Course', CourseSchema);
    
    module.exports = Course;