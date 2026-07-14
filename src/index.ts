import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import HealthcheckRoute from "./ROUTES/healthcheck.route.ts";
app.use("/api/v1/healthcheck", HealthcheckRoute);

import Dout from "./ROUTES/dout.route.ts";
app.use("/api/v1/douts", Dout);

import Onboardig from "./ROUTES/onboarding.route.ts";
app.use("/api/v1/onboarding", Onboardig);

import Upload from "./ROUTES/upload.route.ts"

app.use("/api/v1/uploadnotes", Upload);

app.get("/api/v1/test",(req,res)=>{
  res.status(200).json({
    info:"a testing for error"
    
  })
})
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});
console.log("listeing ");
