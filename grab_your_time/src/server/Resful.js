var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var service = require('./service');
var Account = require('./Account');
var Calendar  = require('./Calendar');
var Type = require('./Type');
var cors =  require('cors');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());



app.post('/', (req, res) => {
    console.log('here');
    res.send('so far so good');
})

app.post('/event', (req, res) => {
    let event = req.body;
    let account = new Account('aco','paw');
    let result = account.createAccountAndCalendar();

    res.send(result);
})

// app.post('/findEvent', (req, res) => {
//     let event = req.body;
//     service.findEvent(event);
//     res.send('so far so good');
// })

// app.get('/getEvent', (req, res) =>{
//     let getEvent = service.getEvent()
//     getEvent.then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err)
//         res.send(err);
//     })
// })

app.delete('/deleteEvent', (req, res) =>{
    let event = req.body;
    let type = new Type();
    let deleteEvent = type.deleteEvent(event._id);
    deleteEvent.then((result) => {
        res.send(result);
    }).catch((err) =>{
        res.send(err);
    })
})

// app.post('/bookStore', (req, res) => {
//     let bookstore = req.body;
//     service.addBookStore(bookstore)
//     .then((result) => {
//         res.send(result);
//     })
// })

// app.post('/findBookStore',(req, res) =>{
//     let bookStore = req.body;
//     service.findBookStore(bookStore)
//     .then((result) =>{
//         res.send(result);
//     })
// })


app.listen(1321, function () {
    console.log('listening on port 1321!');
})