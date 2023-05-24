const express = require('express')
const helper = require('../helper/notesHelper')


const router = express.Router()


// Routes
router.get('/', (req, res) => {
    res.status(200).send('Express App Started ..');
})


// Add a Note 
router.post('/Note', async (req, res) => {
    try {
        const note = await helper.addNote(req.body)
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// View all Notes
router.get('/Note', async (req, res) => {
    try {
        let viewNote = await helper.getNotes()
        res.status(200).json(viewNote)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// view a Note by id
router.get('/Note/:id', async (req, res) => {
    let id = req.params.id
    try {
        const selectedNote = await helper.getOneNote(id)
        res.json(selectedNote)
    } catch (error) {
        console.log(error);
    }
})

// Edit a note 
router.put('/Note/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const note = await helper.editNote(id, body)
        const updatedNote = await helper.getOneNote(id)

        if (!note) {
            res.status(404).json({ message: "cannot find the Note with this id" })
        }
        res.status(200).json(updatedNote)
    } catch (error) {
        console.log(error);
    }
})



// Delete a Note 
router.delete('/Note/:id', async (req, res) => {
    const id = req.params.id
    try {
        const note = await helper.deleteNote(id)
        if (!note) {
            res.status(404).json('cannot find the note')
        }
        res.status(200).json({ 'Successfully deleted': note })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;