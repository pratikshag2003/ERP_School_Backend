const express= require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Erpsystem");
const app = express();

app.use(express.json());

const authRoute = require("./routes/authRoute");
app.use('/api',authRoute);
app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
});
