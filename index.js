const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Network } = require('@modular/dmnc-core')
const config = require('./config.json')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('@modular/standard').config().then((standard) => {
  const network = new Network(standard)

  if (config.endpoint !== undefined && config.endpoint !== null) network.useEndpoint(config.endpoint)
  if (config.modspace !== undefined && config.modspace !== null) network.setCoverage(config.modspace)

  app.post('/', (req, res) => {
    network.handleQuery(req.body).then((result) => {
      console.log(result)
      return res.status(207).send(result)
    }).catch((error) => {
      return res.status(500).send(error.message)
    })
  })

  app.listen(config.port)
})
