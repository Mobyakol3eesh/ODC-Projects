const taskMangerController = require('../controllers/taskmangerController');  
const auth = require('../middleware/auth');

const router = require('express').Router();


router.route('/:index')
    .delete(taskMangerController.deleteTask)
    .patch(taskMangerController.updateTask)

router.route('/')
    .post(taskMangerController.addTask)
module.exports = router;