const { Users } = require('../models');
const bcrypt = require('bcryptjs');


const signInVerify = async (req, res) => {
    const {email, password} = req.body;
    // console.log('Username: ', username)
    console.log('Email: ', email)
    console.log('Password: ', password)
    //Store username in session
    // req.session.username = username;
    // Check to see if they exist in the database. If so redirect to quiz selection page
    
    const user = await Users.findOne({
        where: {
            email
        }
    })

    if(user) {
        //Compare req.body.password with user.hash
        const isValid = bcrypt.compareSync(password, user.password);
        //If password matches with hash
        if(isValid){
            req.session.user_id = user.id;
            //CHANGE LINE BELOW TO A REACT ROUTE
            res.send('success')
        } else {
            res.send('no password')
        }
    } else {
        res.send('no username')
    }






}

module.exports = {

    signInVerify
};

