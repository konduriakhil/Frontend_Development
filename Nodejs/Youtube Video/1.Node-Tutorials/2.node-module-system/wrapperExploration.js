console.log('Node Module Wrapper');

console.log('__filename in wrapperExplorer', __filename);
console.log('__dirname in wrapperExplorer', __dirname);

module.exports.greetings=(name)=>{
      console.log(`Hello ${name}`);
      
}