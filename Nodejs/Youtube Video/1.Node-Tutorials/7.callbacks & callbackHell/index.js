
const fs = require('fs');




function person(name, callbackFn) {
      console.log(`Hello, ${name}`);
      callbackFn()
}

function address() {
      console.log('You are from Earth');
}

person('Konduri Akhil', address)

fs.readFile('notes.txt', 'utf-8', (err, data) => {
      if(err) {
            console.log('Error reading file');
      }
      console.log('Content: ', data);
})