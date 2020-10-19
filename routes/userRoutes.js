const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
//app.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
