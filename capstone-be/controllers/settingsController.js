const { Settings } = require('../models')
const updateSettings = (req, res) => {
    let updateOptions = {};
    for (k in req.body){
        updateOptions[k] = req.body[k]
    }

    await Settings.update(updateOptions, {
        where: {
            user_id
        }
    })

}

module.exports = { 
    updateSettings
}