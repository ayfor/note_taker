//Import data
const fs = require('fs');

const data = require('../db/db.json');


module.exports = (app) => {

    app.get('/api/notes' , (req, res) =>{
        
        console.log(data);
        res.json(data);
    });

}