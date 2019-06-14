const Service = require('./service')

module.exports.createNewNote = (req, res) => {
    const creator = req.user.id;
    Service.createNote({...req.body, creator}).then(note => {
        return res.status(201).json({
            success: true,
            message: 'Note created successfully',
            data: note
        })
    }).catch((error) => {
        return res.status(500).json({
            success: false,
            message: 'UnKnown server error'
        })
    })
}
