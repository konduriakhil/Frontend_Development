function delayFn(time) {
      return new Promise(resolve => setTimeout(resolve, time))
}

// console.log('First');
// delayFn(2000).then(() => console.log('Delayed 2 seconds'))
// console.log('End');

async function delayedGreet(name) {
      console.log('Hello, welcome to nodejs');
      await (delayFn(2000));
      console.log(`Student name: ${name}`);
}

delayedGreet('Konduri Akhil')

async function division(num1, num2) {
      try {
            if (num2 === 0) {
                  return console.log('Can not be divided by 0');

            } else {
                  return console.log(num1 / num2);
            }
      } catch (error) {
            console.error('Error: ', error);
      }
}

async function mainFn() {
      await division(10, 0);
      await division(11212, 10)
}

mainFn();
