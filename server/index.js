import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const data = require('./data/images.json')
const multer = require('multer')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/upload', multer().none(), (req, res) => {
  console.log('Post upload')
  console.log('req.body', req.body)
  console.log('formData', Array.from(req.body))

  // const type = req.type
  // if(type !== "text/csv") {
  //   throw new Error("Type file is not a CSV")
  // }

  // parseCsv(req.body)
  res.json(data)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server started on port ${port}: http://localhost:${port}`)
})
