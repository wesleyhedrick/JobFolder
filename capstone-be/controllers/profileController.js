const { Users } = require('../models')

const updateProfile = (req, res) => {
    let updateOptions = {}
    for(k in req.body){
        updateOptions[k] = req.body[k]
    }

    Users.update(updateOptions)
    res.send('profile updated')    
}


module.exports ={
    updateProfile
}