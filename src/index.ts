 import express from 'express';
 import dotenv from 'dotenv';
 import { prisma } from './DB/db.js';
 import cors from 'cors';
dotenv.config({

});



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.get("/",(req,res)=>{
      console.log("API is working fine")
    res.send("Welcome to NotesBuddy API")
})
import onboardingRoute from './ROUTES/onboarding.route.js';
app.use("/api/v1/onboarding",onboardingRoute)

app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is running on port ${process.env.PORT||8000}`)

})
