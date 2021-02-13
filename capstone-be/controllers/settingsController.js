const { Users } = require('../models')
const updateSettings = async (req, res) => {
    console.log('update settings is working')
    console.log(req.body)

    // sun_iq_time,
    // mon_iq_time,
    // tue_iq_time,
    // wed_iq_time,
    // thu_iq_time,
    // fri_iq_time,
    // sat_iq_time,
    // iq_sun,
    // iq_mon,
    // iq_tue,
    // iq_wed,
    // iq_thu,
    // iq_fri,
    // iq_sat
    await Users.update({...req.body},{
        where: {
            id:req.session.user_id
        }
    })

    res.send('success')
}

module.exports = { 
    updateSettings
}