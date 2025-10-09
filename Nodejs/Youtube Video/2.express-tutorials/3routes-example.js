const express = require('express');
const app = express();

//root route
app.get('/', (req, res) => {
      res.send('welcome to home page')
})

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
      res.json(porducts)
})

//Get a single product
app.get('/products/:productId', (req, res) => {

      console.log('req.params', req.params);

      const productId = parseInt(req.params.productId);

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
      const getSingleProduct = porducts.find(product => product.id === productId);

      if (getSingleProduct) {
            res.json(getSingleProduct);
      } else {
            res.status(404).send('Product Is Not Found. Please try with different ID')
      }
})

const port = 3000;
app.listen(port, () => {
      console.log(`listening on port ${port}`);
})


