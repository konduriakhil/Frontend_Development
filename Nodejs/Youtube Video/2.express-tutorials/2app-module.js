const express = require('express');

const app = express();

//application level  settings
app.set('view engine', 'ejs')

//routing
app.get('/', (req, res) => {
      res.send('Home Page')
})

// post method gives us json format of reply
app.post('/api/data', (req, res) => {
      res.json({
            message: 'Data received',
            data: req.body
      })
})

app.use((err, req, res, next) => {
      console.log(err.stack);
      res.send(404).send('something went wrong')
})