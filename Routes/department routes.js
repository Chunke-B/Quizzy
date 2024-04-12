const express = require('express');

const departmentcontroller = require('../controllers/department.controller');


const connect = require('../server')

const router = express.Router();


router.post('/quizzy/v1/department', departmentcontroller.addDepartment );
router.patch('/quizzy/v1/department:updateId', departmentcontroller.updateDepartment);
router.delete('/quizzy/v1/department :updateId', departmentcontroller.deleteDepartment);
router.get('/quizzy/v1/department', departmentcontroller.getAllDepartments);
router.get('/quizzy/v1/department :DepartmentId', departmentcontroller.getDepartment);


module.exports = router;