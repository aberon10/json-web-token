const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users');

const getAdmin = (req, res) => {
    res.json({message: "Welcome"});
};

const login = async (req, res) => {
    const response = {message: "Invalid credentials"};
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if (user) {
            const hash = await bcrypt.compare(req.body.password, user.password);
            if (hash) {
                response.token = await jwt.sign({user}, process.env.JWT_SECRET_KEY);
                response.name = user.name
                response.email = user.email
                response.message = "Welcome!";
            }
        }
        return res.json(response);
    } catch (error) {
        response.message = error;
        return res.json(response);
    }    
}

const register = async (req, res) => {
    const response = {message: "Invalid credentials"};
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
        });

        const user = await newUser.save();
        const {name, email} = user;
        res.json({ message: 'Registrado correctamente', name, email });
    } catch (error) {
        response.message = error;
        return res.json(response);
    }
}

module.exports = {getAdmin, login, register};