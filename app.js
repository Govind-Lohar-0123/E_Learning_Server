import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import connetDB from "./utils/connectDB.js";
import courseRouter from "./routes/courseRoute.js";
import path from "path"
import feedbackRoute from "./routes/feedbackRoute.js"
import myCourseRouter from "./routes/myCourseRoute.js";
import sendEmail from "./utils/emailSend/sendEmail.js";
dotenv.config();
const app = express();  //it return new Express() instace that have many properties and function
const PORT = process.env.PORT || 8000;

import { fileURLToPath } from "url";

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());//to allow client side to access 
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

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


