
import express from 'express';
const app = express();
import workRouter from './routes/workout.js' //just added .js to solve err_mod_not_found
import mongoose from 'mongoose';
import cors from 'cors'

const port = 4000;
//middle ware
app.use(express.json())// use to access req.body
//routes
app.use("/api/workouts", workRouter)

app.use(cors({
    origin: "/api/workouts/",
    methods: [ "GET", 'POST', 'DELETE', 'PATCH' ],
}))

//mongo db connection
mongoose.connect("mongodb://127.0.0.1:27017/fitnessapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful")
}).catch((e) => {
    console.log(e)
})
// listening to port
app.listen(port, () => {                     //backend server
    console.log(`Listening at port ${port}`)
})