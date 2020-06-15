const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Network } = require('@modular/dmnc-core')
const port = process.env.PORT || 4000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('@modular/standard').config().then((config) => {
  const network = new Network(config)

  app.post('/', (req, res) => {
    if(req.body.network !== config.networkIdentifier) return res.status(500).send('Node does not serve the specified network.')
    network.handleRequests(req.body.requests).then((results) => {
      return res.status(207).send({
        "network": config.networkIdentifier,
        "results": results
      })
    }).catch((error) => {
      return res.status(500).send(error.message)
    })
  })

  app.listen(port)
})
