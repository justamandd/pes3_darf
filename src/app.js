require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const Darf = require('./models/Darf')

app.use(express.static(__dirname+'/views/'))
app.use(express.static(__dirname+'/models/'))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'html', 'darf.html'))
})

app.post('/darf', (req, res) => {
  const { quantity, buyPrice, sellPrice } = req.body

  const darf = new Darf(quantity, buyPrice, sellPrice)

  const payload = {
    profitOrLoss: darf.getProfitOrLostPerShare() * quantity,
    darfPrice: darf.getDarfPrice()
  }

  res.status(200).send(payload)
})

async function bootstrap() {
  app.listen(process.env.PORT, console.log(`http://localhost:${process.env.PORT}/`))
}

bootstrap()
