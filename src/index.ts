import express from 'express'
import {dataSource} from './config/db.config'
import 'reflect-metadata'
import userRouter from './routes/user.route'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

// environment
dotenv.config({path:`.env.${process.env.NODE_ENV}`})
console.log(`running in ${process.env.NODE_ENV} environment`)
const app = express()
const PORT = process.env.PORT

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
app.get('/',(_,res)=>{
  res.status(200).send("Server running successfully")
})
app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`server running on ${PORT} port`)
})
