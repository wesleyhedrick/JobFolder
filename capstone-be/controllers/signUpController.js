const bcrypt = require('bcryptjs');
const { Users } = require('../models');

const createNewUser = async (req, res) => {
    const { first, last, email, password, address_line1,
        address_line2, zipcode, state, daily_app_goal} = req.body
    console.log(req.body)
    const hash = bcrypt.hashSync(password, 10);
    console.log(first, last, email, hash,daily_app_goal, address_line1, address_line2);
    console.log('Create new user is working')
    
    try {
        await Users.create({
            first,
            last,
            email,
            password: hash, 
            address_line1,
            address_line2,
            zip:zipcode,
            state, 
            daily_app_goal
        });
        res.send('success')

    } catch (e) {
        if(e.name === "SequelizeUniqueConstraintError") {
            console.log('user exists')
            res.send('user exists')
        }else{
            console.log(e)
        }
    };
};

const userNameExists = (req, res) => {
    res.render('user-exists')
};

module.exports = {createNewUser, userNameExists}