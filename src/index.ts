import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import HealthcheckRoute from "./ROUTES/healthcheck.route.ts";
app.use("/api/v1/healthcheck", HealthcheckRoute); // server on checking

import Dout from "./ROUTES/dout.route.ts";
app.use("/api/v1/douts", Dout); // dout posting done under a note 

import Onboardig from "./ROUTES/onboarding.route.ts";
app.use("/api/v1/onboarding", Onboardig); //registering a new user info own db 

import Upload from "./ROUTES/upload.route.ts"

app.use("/api/v1/uploadnotes", Upload); // uploading a note by user done

// recomdation notes feed
import RecomdationFeed from "./ROUTES/recomdation.route.ts"
app.use("/api/v1/recomdedfeed",RecomdationFeed)

// serach bar 

import Serach from "./ROUTES/serachbar.route.ts"
app.use("/api/v1/serach",Serach)

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});
