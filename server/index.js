const express = require('express');
const app = express();
require('dotenv').config()
const PORT = 5000;

const db = require('./config/connection')
const Notes = require('./model/model')
const helper = require('./helper/notesHelper')

// Middlewares 
app.use(express.json())


// Routes
app.get('/', (req, res) => {
    res.status(200).send('Express App Started ..');
})



app.post('/Note', async (req, res) => {
    try {
        const note = await helper.addNote(req.body)
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/Note', async (req, res) => {
    try {
        let viewNote = await helper.getNotes()
        res.status(200).json(viewNote)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// 
app.get('/Note/:id', async (req, res) => {
    let id = req.params.id
    try {
        const selectedNote = await helper.getOneNote(id)
        res.json(selectedNote)
    } catch (error) {
        console.log(error);
    }
})

app.put('/Note/:id', async (req, res) => {
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


app.delete('/Note/:id', async (req, res) => {
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



app.listen(PORT, () => {
    console.log(`it's alive on http://localhost:${PORT}`);
})
