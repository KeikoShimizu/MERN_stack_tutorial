require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
//express app
const app = express()


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//middle ware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.acceptsCharsets, req.method)
    next()
})






//routes
// app.get('/',(req, res) => {
//  res.json({msg: 'welcome to the app'})
// })
app.use('/api/workout',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //Lisning to the port number 4000
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening to port', process.env.PORT)
       })
       
})
.catch((error) => {
    console.log(error)
})




//Lisning to the port number 4000 だけどこれ
//だと秘密にできないから、ほかの.env fileの方にポートの情報は環境情報として入れておく。
//そしてここは以下のcodeでかく
// app.listen(4001, () => {
//  console.log('listening to port 4001')
// })

// app.listen(process.env.PORT, () => {
//     console.log('listening to port', process.env.PORT)
//    })

//npm install dotenvをして初めてこのserver.js fileが使うことができる
process.env