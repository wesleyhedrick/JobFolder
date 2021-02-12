const { Users } = require('../models');
const bcrypt = require('bcryptjs');

const checkSession = async (req, res) => {
    if(req.session.user_id){
        console.log('valid session')
        res.json(req.session.user_id)
    } else {
        res.json('null')
    }
}
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
            let id = user.id
            let first = user.first
            //CHANGE LINE BELOW TO A REACT ROUTE
            res.json({status:'success', id, first})
        } else {
            res.send({status:'no password'})
        }
    } else {
        res.send({status:'no username'})
    }

}
const signOut = async (req, res) => {
    req.session.destroy()
    console.log('session destroyed')
    res.send('goodbye')
}

module.exports = {
    checkSession,
    signInVerify, 
    signOut
};

