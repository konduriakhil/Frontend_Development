const fs = require('fs');

fs.readFile('notes.txt','utf-8', (err,data)=>{
      if(err){
            console.error('Error in reading data', err)
            return
      }
      const modifiedData = data.toUpperCase();
      fs.writeFile('output1.txt', modifiedData, (err)=>{
            if (err) {
                  console.error('Error in writing data', err);
                  return
            }
            console.log('Data was successfully written to output1.txt');
            fs.readFile('output1.txt', 'utf-8', (err, data)=>{
                  if (err) {
                        console.error('Error in reading data:', err)
                        return
                  }
                  console.log('Content of modified file(output1.txt) is: ', data);
            })
      })
})