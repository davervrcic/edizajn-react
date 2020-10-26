const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    res.send("h100000eloooooo1o");
})

app.listen(3001, () => {
    console.log("runnig on port 3001");
})