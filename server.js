const { error } = require('console')
const express = require('express');
const ticketRouter = require('./routes/ticket')
const { connectDB } = require('./config/db');
const app = express();

connectDB('mongodb://127.0.0.1:27017/tickets-generate')
    .then(() => console.log("Mongodb connected!"));

app.use(express.urlencoded({extended:false}))
app.use('/buyTicket' , ticketRouter);

const port = 5005;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})