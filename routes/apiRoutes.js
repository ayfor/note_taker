//Import data

const data = require(../db/db.json)


module.exports = (app) => {

    app.get('/api/notes' , (req, res) =>{
        
        console.log(res.json(data));
        res.json(data);
    });

}