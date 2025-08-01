import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js'; 
import foodRouter from './routes/foodRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app config
const app = express()
const port = 4000;

// middleware
app.use(cors());    // using this we can access any backend form frontend
app.use(express.json());  // for parsing application/json requests 

// db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);


app.get("/",(req,res)=>{
    res.send("API Working");
}) // we can request data from the server

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

app.use('/images', express.static(path.join(__dirname, 'uploads')));


// mongodb+srv://earun:210001@cluster0.fupfepr.mongodb.net/?