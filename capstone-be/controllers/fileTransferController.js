const { Users, Jobs, Contacts, Inspiration } = require('../models');


const downloadDocument = async (req, res) => {
    res.status(200).download(`./uploads/${req.body.name}`)    
}

const uploadDocument = async (req, res) => {
    console.log('upload function is working')
    console.log(req.files.file)
    const file = req.files.file
    file.mv(`../documents/${(new Date()).getTime()}-${file.name}`)
    res.send('File uploaded successfully')
    // res.redirect()
}
module.exports = {
    downloadDocument,
    uploadDocument
};

