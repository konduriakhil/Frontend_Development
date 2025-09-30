//module.export -->import a from
const firstModule = require('./firstModule');
// console.log(firstModule.add(9, 5))


try {
      console.log('Trying division by Zero');
      let result = firstModule.divide(0, 9)
      console.log(result);

} catch (err) {
      console.log('Error: ', err.message);

}

// Module Wrapper

