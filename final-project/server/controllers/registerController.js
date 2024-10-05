const User = require('../models/userModel');

let registerUser = async (req, res) => {
    let user = req.body;
    try {
        await User.create(user); // Make sure to await the creation
        res.status(201).send('User created successfully');
    } catch (err) {
        res.status(500).send('Error creating user');
    }
};

module.exports = registerUser;

