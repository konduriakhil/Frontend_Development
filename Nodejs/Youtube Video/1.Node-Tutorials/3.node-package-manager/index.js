const lodash = require('lodash')

const names = ['akhil', 'sai', 'jhon', 'cherry']

const capitalize = lodash.map(names, lodash.capitalize)

console.log(capitalize);
