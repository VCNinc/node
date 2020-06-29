const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { ModularPlatform } = require('@modular/msip-core')
const config = require('./config.json')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

ModularPlatform.standard().then((platform) => {
  platform.initialize()

  if (config.endpoint !== undefined && config.endpoint !== null) platform.useEndpoint(config.endpoint)

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

  app.listen(config.port)
})
