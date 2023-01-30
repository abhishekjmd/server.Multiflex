const express = require('express');
const Router = express.Router();
const { registerUser, sendOtp, verifyOtp, allUsers, deleteUser } = require('../controllers/UserController');

Router.post('/register', registerUser);
Router.post('/signin', sendOtp);
Router.post('/verify-otp', verifyOtp);
Router.get('/allUsers', allUsers);
Router.delete('/deleteUser/:id', deleteUser)

module.exports = Router
