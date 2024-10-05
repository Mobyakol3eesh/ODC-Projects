const User = require('../models/userModel');
const bcrypt = require('bcrypt');
let loginUser = async (req, res) => {
    const {email , password} = req.body; 
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ message: 'Invalid password' });
        }
        else {
            res.json({ message: 'User logged in successfully' });
        }
    } catch (err) {
        console.error('Error logging in user:', err);
        res.json({ message: 'Server error' });
    }
};

module.exports = loginUser;
