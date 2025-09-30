console.log('Directory Name:' + __dirname);
console.log('File Name:' + __filename);
console.log('Node JS Version: ' + process.version);
console.log('Platform: ' + process.platform, 'Architecture: ' + process.arch);
console.log('Memory Usage: ' + process.memoryUsage());
console.log('Uptime: ' + process.uptime());

const person = process.argv[2]
if (person) {
      console.log('Hi ' + person + ', Welcome to ReactJS ')
}
else {
      console.log("Enter command like 'node systemInfo.js yourname' to display your name")
}