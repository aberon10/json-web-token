const Router = require('express').Router;
const { getAdmin, login, register } = require('../controllers/users')
const verifyToken = require('../middlwares/verifyToken');

const router = Router();

router.get('/admin', verifyToken, getAdmin);

router.post('/login', login);

router.post('/register', register);

module.exports = router;