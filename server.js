const express = require('express');

const app = express();
const path = require('path');

const PORT = 3000;

//DATA  PARSING
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());
app.post('/email', (req,res)=> {
    //TODO
    //SEND EMAIL HERE
    console.log('Data: ',req.body);
    res.json({message: 'Message recieved!!'})
});


app.listen();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','index.html'));
})

app.listen(PORT, () => {
    console.log('Server is up on PORT -', PORT);  
})

 