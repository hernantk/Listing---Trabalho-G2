import express from 'express';
import  {defineUserRoutes}  from './routes/index.js';

const app = express()

app.use(express.json())

defineUserRoutes(app)

app.listen(8081,()=> console.log("User Api is up!"))
