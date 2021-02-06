const { Users } = require('../models');
const bcrypt = require('bcryptjs');

// const loginLanding = (req, res) => {
//     res.render('login')
// };

const loginVerify = async (req, res) => {
    const {username, password} = req.body;
    console.log('Username: ', username)
    console.log('Password: ', password)

    //Store username in session
    req.session.username = username;
    
    // Check to see if they exist in the database. If so redirect to quiz selection page
    const user = await Users.findOne({
        where: {
            username
        }
    })

    if(user) {
        //Compare req.body.password with user.hash
        const isValid = bcrypt.compareSync(password, user.password);
        //If password matches with hash
        if(isValid){
            req.session.user_id = user.id;
            //CHANGE LINE BELOW TO A REACT ROUTE
            res.json('Logging you in')
            return
            res.json('/dashboard');
        } else {
            res.send('line 34 couldn\'t find you')
            return
            res.redirect('/sign-up');
        }
    } else {
        res.send('line 39 couldn\'t find you')
        return
        res.redirect('/sign-up');
    }






}

module.exports = {

    loginVerify
};

