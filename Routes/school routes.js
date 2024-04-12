const express = require('express');

const schoolcontroller = require('../controllers/school.controller');


const connect = require('../server')

const router = express.Router();


router.post('/quizzy/v1/school', schoolcontroller.addSchool );
// router.patch('/quizzy/v1/school:updateId', schoolcontroller.updateDepartment);
// router.delete('/quizzy/v1/school :updateId', schoolcontroller.deleteDepartment);
// router.get('/quizzy/v1/school', schoolcontroller.getAllDepartments);
// router.get('/quizzy/v1/school :DepartmentId', schoolcontroller.getDepartment);


module.exports = router;