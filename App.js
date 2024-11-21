// const express = require('express')
import HelloRoutes from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import express from 'express';
const app = express();

HelloRoutes(app);
Lab5(app);


app.listen(process.env.PORT || 4000)