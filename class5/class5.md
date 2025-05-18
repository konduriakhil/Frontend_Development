# Data types in Java Script

* Number(integer or float)
* String
* Boolean
* Object
* Array
* Undefined
* Null
## type conversion in JS
*  JS is dynamic data typing
   *  Based on value they assign automatically
         *  x = 100
         *  name = 'akhil'
*  In JS integer and float is combined and say as Number

## Number
* var price = 24.44;
* var age = 27;
## String
* Group of characters or words
* Strings are declared by using '' or ""
## Boolean
* true or false
## Object
* An is used for saving group of values
* It is a collection of pairs
    * Key: Value pairs
* var user = { firstname:'Konudri', lastname: 'Akhil', city:'Hyd'};
    * {} block of code is also used for object
## Array
* It is a collection of values
* It is a collection of values
* var subjects = ['html', 'css', 'js'];
## undefined and null
## Number, String, Boolean
```html
<html>
    <head>
        <title>Tab of JS</title>
    </head>
    <body>
        <h1>Welcome to Java Script</h1>
        <script>

            // var x = 100;
            // var price = 34.494;
            // document.writeln(x);
            // document.writeln(price);

            // var x = 100;
            // var price = 34.494;
            // document.writeln(typeof x);
            // document.writeln(typeof price);

            var x = 100;
            var price = 34.494;
            isConsoleLoggedIn = true;
            document.writeln(x);
            document.writeln(price);
            console.log(typeof isConsoleLoggedIn, isConsoleLoggedIn);
            console.log( isConsoleLoggedIn);




        </script>
    </body>
</html>
```
## Array and Object
```htm;
<html>
    <head>
        <title>Tab of JS</title>
    </head>
    <body>
        <h1>Welcome to Java Script</h1>
        <script>

            /*
            var x = 100;
            var price = 34.494;
            document.writeln(x);
            document.writeln(price);
            */
            
            /*
            var x = 100;
            var price = 34.494;
            document.writeln(typeof x);
            document.writeln(typeof price);
            */

          /*
           var x = 100;
            var price = 34.494;
            isConsoleLoggedIn = true;
            document.writeln(x);
            document.writeln(price);
            console.log(typeof isConsoleLoggedIn, isConsoleLoggedIn);
            console.log( isConsoleLoggedIn);
            */

            /*
            var user = {};
            console.log(user)
            */

            /*
            var user = {name: 'Akhil', age: '27'};
            console.log(user)
            */


            /*
            var user = {name: 'Akhil', age: '27'};
            console.log(user.name)
            */
            

            /*
            var names = ['akhil', 'sai'];
            console.log(names);
            var user = {name: 'Akhil', age: '27'};
            console.log(user);
            */


        </script>
    </body>
</html>
```

## Operator
* `=` - Assignment Operator
* `==` - Comparison Operator (value)
* `===` - Comparison Operator (Data type and value also)

## Undefined and Null
* undefined data type is undefined
    * it has empty value
* Null datatype is object
    * it has empty value
```html
<html>
    <head>
        <title>Tab of JS</title>
    </head>
    <body>
        <h1>Welcome to Java Script</h1>
        <script>

            /*
            var x = 100;
            var price = 34.494;
            document.writeln(x);
            document.writeln(price);
            */
            
            /*
            var x = 100;
            var price = 34.494;
            document.writeln(typeof x);
            document.writeln(typeof price);
            */

          /*
           var x = 100;
            var price = 34.494;
            isConsoleLoggedIn = true;
            document.writeln(x);
            document.writeln(price);
            console.log(typeof isConsoleLoggedIn, isConsoleLoggedIn);
            console.log( isConsoleLoggedIn);
            */

            /*
            var user = {};
            console.log(user)
            */

            /*
            var user = {name: 'Akhil', age: '27'};
            console.log(user)
            */


            /*
            var user = {name: 'Akhil', age: '27'};
            console.log(user.name)
            */
            

            /*
            var names = ['akhil', 'sai'];
            console.log(names);
            var user = {name: 'Akhil', age: '27'};
            console.log(user);
            */

            // var x = 10;
            // var y;
            // console.log(typeof x)
            // console.log(typeof y)

            // var x = null;
            // var y = undefined;
            // console.log( x)
            // console.log(typeof y)

            // var x = null;
            // var y = undefined;
            // console.log(x == y);// true
            // console.log(x === y);// false

            // console.log(10 == 10);

            // console.log(10 === 10);

            // console.log(10 == '10');// it compare only value and do not compare data type// o;utput is true
            // console.log(10 === '10');// it will compare value and data types also // output false

            //  var x = null;
            // var y = undefined;
            // console.log(x == y);// true
            // console.log(x === y);// false
            // console.log(typeof null);
            // console.log(typeof undefined);
            
            // var user1 = {name: 'akhil', age: 27};
            // var user2 = {name: 'Sai', age: 25};
            // console.log(user1 == user2)//output is false

            var user1 = {name: 'akhil', age: 27};
            var user2 = {name: 'akhil', age: 27};
            console.log(user1 == user2); // output is false
            console.log(user1 === user2); // output is false // object always check reference not values
            console.log(user1 === user1) ;// output is true //  reference matches that's why output is true



        </script>
    </body>
</html>
```