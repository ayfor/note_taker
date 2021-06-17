//Import data
const fs = require('fs');
const idGenerator = require('uniqid')

const data = require('../db/db.json');

function updateData() {
    fs.writeFile('./db/db.json', JSON.stringify(data),(err)=>{
        if(err){
            console.log(err);
        }
    });
}

module.exports = (app) => {

    app.get('/api/notes' , (req, res) =>{
        //console.log(data);
        res.json(data);

        updateData();
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

        updateData();
    });

    app.delete('/api/notes/:id', (req, res)=>{
        let removeId = req.params.id;
        //console.log(removeId);
        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            if(element.id===removeId){
                data.splice(index,1);
            }
            
        }

        res.json(data);

        updateData();
    });
        

        
    

}