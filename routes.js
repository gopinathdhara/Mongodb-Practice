const employees = require('./employeeController');
const departments = require('./departmentController');
const task = require('./taskController');
const practice_promise = require('./practice/practice_promise');
module.exports = {
  employees,
  departments,
  task,
  practice_promise
};