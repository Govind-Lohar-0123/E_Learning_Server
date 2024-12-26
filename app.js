import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import connetDB from "./utils/connectDB.js";
import courseRouter from "./routes/courseRoute.js";

import feedbackRoute from "./routes/feedbackRoute.js"
import myCourseRouter from "./routes/myCourseRoute.js";
import sendEmail from "./utils/emailSend/sendEmail.js";
dotenv.config();
const app = express();  //it return new Express() instace that have many properties and function
const PORT = process.env.PORT || 8000;


const corsOptions = {
    origin: ['https://e-learning-client.vercel.ap','http://localhost:3000'], // Your frontend's URL
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    credentials: true // Allow cookies if necessary
};

app.use(cors(corsOptions));

// app.use(cors());//to allow client side to access 
//connect db connection
connetDB();

//Add Data to DB
// CourseController.addCourses(courseData);



//Using Middleware
// app.use(express.json());
app.use(bodyParser.json());
//both bodyparse and expres.jsong middleware are same are used to parse means add the jsong data comming from 
// resuqest into res.body so that we use data like res.body if we dont use any middleware it provide an error

app.post("/send-email",sendEmail);
//Loading All Routes 
app.use("/", userRouter);
app.use("/", courseRouter);
app.use("/", feedbackRoute);
app.use("/", myCourseRouter);

//send Email js


















//serve is listening at port 8000
app.listen(PORT, () => {
    
})


