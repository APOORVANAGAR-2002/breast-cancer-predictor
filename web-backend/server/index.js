let express = require('express')
let cors = require('cors')

let app = express()

const PORT = 5000

app.use(cors())
app.use(express.json())

app.post('/submit', (req, res) => {
    let data = req.body;
    console.log(data);

    res.send("Successfully submitted");
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})