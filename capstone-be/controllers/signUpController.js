const bcrypt = require('bcryptjs');
const { Users } = require('../models');

const createNewUser = async (req, res) => {
    const { first, last, username, email, password, address_line_1, address_line_2, zip, state} = req.body
    const hash = bcrypt.hashSync(password, 10);
    console.log(first, last, username, email, hash);

    try {
        await Users.create({
            first,
            last,
            username,
            email,
            password: hash, 
            address_line_1,
            address_line_2,
            zip,
            state
        });
        //res.redirect('/login') chris' notes have a res.redirect here after the information is created
    } catch (e) {
        if(e.name === "SequelizeUniqueConstraintError") {
            res.redirect('/signup/user-exists');
        }
    };
    res.send('successfully signed up')
    return
    res.redirect('/login');
};

const userNameExists = (req, res) => {
    res.render('user-exists')
};

module.exports = {createNewUser, userNameExists}