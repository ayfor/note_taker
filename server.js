//DEPENDENCIES

const express = require('express');

const app = express();


const PORT  = process.env.PORT || 8081;


app.use(express.urlencoded({ extended:true }));
app.use(express.json());
//IMPORTANT: uses 'public' folder as root folder for static assets
app.use(express.static('db'))
app.use(express.static('public'))




require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, ()=>{
    console.log(`NOTE TAKER started, Listening on PORT ${PORT}`);
});