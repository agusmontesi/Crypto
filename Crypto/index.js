const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const app = express();


const PORT = 3001;

app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use("/", require("./src/home"))

app.listen(PORT, () => {
   console.log(`Server is listening in port: ${PORT}`) 
})
