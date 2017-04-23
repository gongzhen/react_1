const express = require('express')  
const app = express()

app.use((request, response, next) => {    
  console.log(response.statusCode)
  next()
})

app.use((request, response, next) => {  
  next()
})

app.get('/', (request, response) => {  
  response.json({
    statusCode: response.statusCode
  })
})

app.listen(3000)  