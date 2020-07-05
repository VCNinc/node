const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { ModularPlatform } = require('@modular/msip-core')
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

ModularPlatform.standard().then((platform) => {
  if (process.env.ENDPOINT !== undefined && process.env.ENDPOINT !== null) platform.useEndpoint(process.env.ENDPOINT)

  platform.setCoverage('0%1')

  platform.initialize()

  app.get('/', (req, res) => {
    res.redirect('https://github.com/modular')
  })

  app.post('/', (req, res) => {
    platform.network.handleQuery(req.body).then((result) => {
      return res.status(207).send(result)
    }).catch((error) => {
      return res.status(500).send(error.message)
    })
  })

  app.listen(port)
})
