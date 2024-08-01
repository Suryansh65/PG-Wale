require('dotenv').config();
const express = require('express');
const app = express();
const authrouter = require('./router/auth-router');
const contactrouter = require("./router/contact-router");
const servicerouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");
const connectDb = require('./utils/db');
const cors = require('cors');
const errorMiddleware =  require('./middlewares/error-middleware');
//cors policy
// const corsOption = {
//     origin:"http://localhost:5173",
//     methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
//     credentials: true,
// };
app.use(cors());
app.use(express.json()); // important to place before any route
//Router
app.use("/api/admin",adminRouter);
app.use('/api/auth',authrouter);
app.use('/api/form',contactrouter);
app.use("/api/data",servicerouter);
//Error handling middleware
app.use(errorMiddleware);

connectDb().then(()=>{
    console.log("Connection is successfull.")
})
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})