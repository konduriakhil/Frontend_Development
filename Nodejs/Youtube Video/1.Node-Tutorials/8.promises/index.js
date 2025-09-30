function delayFn(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
}

console.log('Promise lecture starts');
delayFn(2000).then(() => console.log('After 2 seconds promise resolved'))
console.log(' end');



function divideFn(num1, num2) {
      return new Promise((resolve, reject) => {
            if (num2 === 0) {
                  reject('Second number can not be zero');
            } else {
                  resolve(num1 / num2)
            }
      })
}

divideFn(20, 0).then((data) => {
      console.log('Output: ', data);
}).catch((error) => {
      console.log('Error Occured: ', error);
})