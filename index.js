const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public', { 
    setHeaders: function (res, path, stat) {
      res.set('Content-Type', 'text/html')
    }
}))
app.use(express.static(__dirname + '/public', { type: 'text/html' }))


app.listen(5501, (res) => {
    console.log('Listening on port 5501')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/students')
.then(() => console.log('Database Connected'))
.catch(err => console.log('Error connecting to database:', err));

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// Define schema and validate using mongoose
const npmList = new mongoose.Schema({
    id: { type: Number },
    packageName: { type: String },
    homePage: { type: String },
    repository: { type: String }
})

// Create model for schema `npmList` using mongoose
const NpmList = mongoose.model('NpmList', npmList)

const Student = mongoose.model('Student', studentSchema)

app.post('/student', (req, res) => {
    let student = new Student(req.body);
    console.log('Received request:', req.body)
    student.save()
        .then(doc => {
            res.send(doc)
            console.log(doc)
        })
        .catch(err => console.log(err))
})

app.get('/students', (req, res) => {
    student.find({})
        .then(docs => {
            console.log(docs)
            res.json(docs)
        })
        .catch(err => console.log(err))
})

