const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: 'https://hotelapi.loyalty.dev/api/hotels'
}));

app.post("/", (req, res) => {
    res.send();
})

app.listen(5173, () => console.log("Listening to the api requests"))