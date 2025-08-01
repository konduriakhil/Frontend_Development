# class 21
# Array iteration methods
# map()
* It will return modified elements to a new array.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id = 'test'>

    </div>
    <script>

/*         const names  = ['akhil', 'sai', 'akhil', 'varshath','akhil', 'ajay', 'akhil', 'anand'];

        let txt = '';
        txt += '<ul>'
        names.map((item, index, Array) =>{
            txt += '<li>'+item+'</li>';
        })
        txt += '</ul>'
        document.getElementById('test').innerHTML = txt; */

        const names  = ['akhil', 'sai', 'akhil', 'varshath','akhil', 'ajay', 'akhil', 'anand'];

        names.map((item, index) =>{
            console.log(item, index, 'hello')
        })
    </script>
</body>
</html>
```
![alt text](images/img1.png)
![alt text](images/img2.png)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id = 'test'>

    </div>
    <script>
        const users = [
        { id: 1,firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032},
        { id: 2,firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001},
        { id: 3,firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { id: 4,firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { id: 5,firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249}];    

        var div = document.getElementById('test');
        var txt =  '';
        if(users.length >0){
            txt += '<table>'
                txt += '<tr>'
                    txt += '<tr><th>ID</th><th>firstname</th><th>lastname</th><th>city</th><th>pincode</th></tr>'
                    users.map((item) => {
                        txt += '<tr>'
                            txt += '<td>'+item.id+'</td>'
                            txt += '<td>'+item.firstname+'</td>'
                            txt += '<td>'+item.lastname+'</td>'
                            txt += '<td>'+item.city+'</td>'
                            txt += '<td>'+item.pincode+'</td>'
                        txt += '</tr>'
                    })
                txt += '</tr>'
            txt += '</table>'
        }
        div.innerHTML = txt
    </script>
</body>
</html>
```
#### Using `spread operator and map()`
![alt text](images/img3.png)
```js
       const users = [
        { id: 1,firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032},
        { id: 2,firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001},
        { id: 3,firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { id: 4,firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { id: 5,firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249}];    

        const modifiedUsers = users.map((item) =>{
            return {...item, status: 'active'}
        })
        console.log(modifiedUsers)
```
![alt text](images/img4.png)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id = 'test'>

    </div>
    <script>
        const users = [
        { id: 1,firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032},
        { id: 2,firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001},
        { id: 3,firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { id: 4,firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { id: 5,firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249}];    

        const modifiedUsers = users.map((item) =>{
            return {...item, status: 'active'}
        })
        console.log(modifiedUsers)

        var div = document.getElementById('test');
        var txt =  '';
        if(users.length >0){
            txt += '<table>'
                txt += '<tr>'
                    txt += '<tr><th>ID</th><th>firstname</th><th>lastname</th><th>city</th><th>pincode</th> <th>Status</th></tr>'
                    modifiedUsers.map((item) => {
                        txt += '<tr>'
                            txt += '<td>'+item.id+'</td>'
                            txt += '<td>'+item.firstname+'</td>'
                            txt += '<td>'+item.lastname+'</td>'
                            txt += '<td>'+item.city+'</td>'
                            txt += '<td>'+item.pincode+'</td>'
                            txt += '<td>'+item.status+'</td>'
                        txt += '</tr>'
                    })
                txt += '</tr>'
            txt += '</table>'
        }
        div.innerHTML = txt
    </script>
</body>
</html>
```
![alt text](images/img5.png)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id = 'test'>

    </div>
    <script>
        const users = [
        { id: 1,firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032, dob: '02-06-1998'},
        { id: 2,firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob: '05-06-1998'},
        { id: 3,firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 , dob: '07-06-1990'},
        { id: 4,firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 , dob: '01-06-1997'},
        { id: 5,firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249, dob: '12-06-1989'}];    

                // Function to calculate age
        function calculateAge(dob) {
            const birthDate = new Date(dob.split('-').reverse().join('-')); // Convert 'dd-mm-yyyy' to 'yyyy-mm-dd'
            const ageDiff = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        };
        const modifiedUsers = users.map((item) =>{
            return {...item, status: 'active', age: calculateAge(item.dob)}
        })
        console.log(modifiedUsers)

        var div = document.getElementById('test');
        var txt =  '';
        if(users.length >0){
            txt += '<table>'
                txt += '<tr>'
                    txt += '<tr><th>ID</th><th>firstname</th><th>lastname</th><th>city</th><th>pincode</th> <th>Status</th><th>Age</th></tr>'
                    modifiedUsers.map((item) => {
                        txt += '<tr>'
                            txt += '<td>'+item.id+'</td>'
                            txt += '<td>'+item.firstname+'</td>'
                            txt += '<td>'+item.lastname+'</td>'
                            txt += '<td>'+item.city+'</td>'
                            txt += '<td>'+item.pincode+'</td>'
                            txt += '<td>'+item.status+'</td>'
                            txt += '<td>'+item.age+'</td>'
                        txt += '</tr>'
                    })
                txt += '</tr>'
            txt += '</table>'
        }
        div.innerHTML = txt


    </script>
</body>
</html>
```
![alt text](images/img6.png)
```js

        const users = [
        { id: 1,firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032, dob: '02-06-1998'},
        { id: 2,firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob: '05-06-1998'},
        { id: 3,firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 , dob: '07-06-1990'},
        { id: 4,firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 , dob: '01-06-1997'},
        { id: 5,firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249, dob: '12-06-1989'}];    

                // Function to calculate age
        function calculateAge(dob) {
            const birthDate = new Date(dob.split('-').reverse().join('-')); // Convert 'dd-mm-yyyy' to 'yyyy-mm-dd'
            const ageDiff = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        };


        const modifiedUsers = users.map((item) =>{
            let fullname = item.firstname+' '+item.lastname
            return {...item, status: 'active', age: calculateAge(item.dob), fullname: fullname}
        })
        console.log(modifiedUsers)


        var div = document.getElementById('test');
        var txt =  '';
        if(users.length >0){
            txt += '<table>'
                txt += '<tr>'
                    txt += '<tr><th>ID</th><th>firstname</th><th>lastname</th><th>FullName</th><th>city</th><th>pincode</th> <th>Status</th><th>Age</th></tr>'
                    modifiedUsers.map((item) => {
                        txt += '<tr>'
                            txt += '<td>'+item.id+'</td>'
                            txt += '<td>'+item.firstname+'</td>'
                            txt += '<td>'+item.lastname+'</td>'
                            txt += '<td>'+item.fullname+'</td>'
                            txt += '<td>'+item.city+'</td>'
                            txt += '<td>'+item.pincode+'</td>'
                            txt += '<td>'+item.status+'</td>'
                            txt += '<td>'+item.age+'</td>'
                        txt += '</tr>'
                    })
                txt += '</tr>'
            txt += '</table>'
        }
        div.innerHTML = txt
```
![alt text](images/img7.png)


#### I need below 30 years of age only

