//Import data
const fs = require('fs');
const idGenerator = require('uniqid')

const data = require('../db/db.json');


module.exports = (app) => {

    app.get('/api/notes' , (req, res) =>{
        //console.log(data);
        console.log('reading notes...')
        res.json(data);
    });

    app.post('/api/notes', (req, res) => {
        //Generate id
        let newId = idGenerator();

        //Assign generated id to request body
        req.body.id = newId;

        //Push new note to data
        data.push(req.body);

        //Return new note object
        res.json(req.body);
    })

}