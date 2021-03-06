const express = require('express');
//const { getAllUsers, createUser } = require('../controllers/userController');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/updateMyPassword', protect, updatePassword);

//router.route('/').get(getAllUsers).post(createUser);
//app.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
