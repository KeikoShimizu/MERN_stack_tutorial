const express = require('express')
require('dotenv').config()
//express app
const app = express()
const workoutRoutes = require('./routes/workout')

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/',(req, res) => {
//  res.json({msg: 'welcome to the app'})
// })
app.use(workoutRoutes)




//Lisning to the port number 4000 だけどこれ
//だと秘密にできないから、ほかの.env fileの方にポートの情報は環境情報として入れておく。
//そしてここは以下のcodeでかく
// app.listen(4001, () => {
//  console.log('listening to port 4001')
// })
app.listen(process.env.PORT, () => {
 console.log('listening to port', process.env.PORT)
})

//npm install dotenvをして初めてこのserver.js fileが使うことができる
process.env