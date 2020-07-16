const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { ModularPlatform } = require('@modular/msip-core')
const port = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS')
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

ModularPlatform.standard().then((platform) => {
  if (process.env.ENDPOINT !== undefined && process.env.ENDPOINT !== null) platform.useEndpoint(process.env.ENDPOINT)
  if (process.env.COVERAGE !== undefined && process.env.COVERAGE !== null) platform.setCoverage(process.env.COVERAGE)

  platform.initialize()

  platform.onReady(() => {
    platform.announce()
  })

  app.get('/', (req, res) => {
    return res.redirect('https://github.com/modular')
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
