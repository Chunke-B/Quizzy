
const mongoose = require('mongoose');

const DepartmentsSchema = new mongoose.Schema({
    departmentId: {
            type: Number,
            unique: true,
            required: [true, 'A Department must have a departmentID'],
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'A Department must have a name'],
        },
    })
    const Department = mongoose.model('Department', DepartmentsSchema);
    
    module.exports = Department;