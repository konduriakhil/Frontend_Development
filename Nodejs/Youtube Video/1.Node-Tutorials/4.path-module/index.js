const path = require('path');


console.log('Directory name: ', path.dirname(__filename));
console.log('File Name: ', path.basename(__filename));
console.log('Extension Name: ', path.extname(__filename));

const joinedPath = path.join('/users', 'docs', 'audio', 'telugu')
console.log('Join Path: ', joinedPath);

const resolvePath = path.resolve('user', 'docs', 'node', 'project')
console.log('resolvedPath: ', resolvePath)

