const express = require('express');
const app = express();

//root route
app.get('/', (req, res) => {
      res.send('welcome to home page')
})

//get a single product
app.get('/products/:id')

// get all porducts
app.get('/products', (req, res) => {
      const porducts = [{
            id: 1,
            label: 'Product 1'
      }, {
            id: 2,
            label: 'Product2'
      }, {
            id: 3,
            label: 'Product3'
      }]
      res.send(porducts)
})

const port = 3000;
app.listen(port, () => {
      console.log(`listening on port ${port}`);
})

