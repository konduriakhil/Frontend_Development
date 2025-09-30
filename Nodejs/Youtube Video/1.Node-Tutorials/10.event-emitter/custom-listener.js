const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
      constructor() {
            super()
            this.greeting = 'Hello'
      }
      greet(name) {
            this.emit('greeting', `${this.greeting}, ${name}`)
      }
}

const ourCustomEmitter = new MyCustomEmitter();

ourCustomEmitter.on('greeting', (input) => {
      console.log(`Greeting Event`, input);
})

ourCustomEmitter.greet('Akhil')
