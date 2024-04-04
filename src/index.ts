import express from 'express'
import {dataSource} from './config/db.config'
import 'reflect-metadata'
import userRouter from './routes/user.route'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

// Database initialization
dataSource
  .initialize()
  .then(() => {
    console.log('Database connected successfully')
  })
  .catch((error) => {
    console.log('failed to connect with database', error)
  })

// middlewares
app.use(bodyParser.json())

// routes
app.get('/',(req,res)=>{
  res.status(200).send("Server running successfully")
})
app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`running on ${PORT} port`)
})
