# Operators in Java Script
 ------------------------------------------
* `+`
* `-`
* `*`
* / - division
* % - modulus division (remainder)
* = - Assignment operator
* == - comparison operator(consider's value and not data type)
* === - comparison operator(consider's value and data type)
* && - logical AND
* || - logical OR
* ! - logical NOT
```html
<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            var x = 300;
            var y = 100;
            var sum = x + y;
            var sub = x - y;
            var div = x / y;
            document.write(sum);
            document.write(sub);
            document.write(div);
            console.log(sum, sub, div);
        </script>
    </body>
</html>
```
* In JS, + is used for the addition, 
* we can also use + for concatination operator or Joining Operator
```html
<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            var x = '300';//
            var y = '100';//
            var sum = x + y;
            var sub = x - y;
            var div = x / y;
            document.write(sum);// concatination
            document.write(sub);
            document.write(div);
            console.log(sum, sub, div);
        </script>
    </body>
</html>
```
* `typeof` is used for to determine the datatype
```html
<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            var x = '300';//
            var y = '100';//
            var sum = x + y;
            document.write(typeof sum);// concatination

            /*var sub = x - y;
            var div = x / y;
            document.write(sub);
            document.write(div);
            console.log(sum, sub, div);
            */
        </script>
    </body>
</html>
```
```html
<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            var x = '300';//
            var y = '100';//
            var sum = x + y;// 3001(concatination)
            var num = x + y + 'Hello';
            document.write(typeof sum);// concatination

            /*var sub = x - y;
            var div = x / y;
            document.write(sub);
            document.write(div);
            console.log(sum, sub, div);
            */
        </script>
    </body>
</html>
```
## first number addition and concatination
* It follows bodmos rule
var num = x + y + 'Hello'; //400Hello
```html
<!--  This is sample  Java Script file   -->



<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            var x = 300;//
            var y = 100;//
            var sum = x + y;// 3001(concatination)
            var num = x + y + 'Hello';
            // document.write(sum);// concatination
            document.writeln(num)// 400Hello

            /*var sub = x - y;
            var div = x / y;
            document.write(sub);
            document.write(div);
            console.log(sum, sub, div);
            */
        </script>
    </body>
</html>

```
## Starting with string concatination
'Hello' + x + y// Hello300100
```html
<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            var x = 300;//
            var y = 100;//
            var sum = x + y;// 3001(concatination)
            var num ='Hello' + x + y;//
            // document.write(sum);// concatination
            document.writeln(num);// Hello300100

            /*var sub = x - y;
            var div = x / y;
            document.write(sub);
            document.write(div);
            console.log(sum, sub, div);
            */
        </script>
        <script>
    </body>
</html>
```
## Hello400World
```html
<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            var x = 300;//
            var y = 100;//
            var sum = x + y;// 3001(concatination)
            var num ='Hello' + (x + y) + 'World';//
            // document.write(sum);// concatination
            document.writeln(num)// Hello300100

            /*var sub = x - y;
            var div = x / y;
            document.write(sub);
            document.write(div);
            console.log(sum, sub, div);
            */
        </script>
    </body>
</html>
```
```html
<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            // var first_name = 'Konduri';
            // var last_name = 'Akhil';
            // full_name = first_name + last_name;
            // document.writeln(full_name)



        </script>
    </body>
</html>
```
# String concatination
```html
<!--  This is sample  Java Script file   -->



<html>
    <head>
        <title>This is java script tab</title>
    </head>
    <body>
        <h1>This is Java Script</h1>
        <script>
            // var first_name = 'Konduri';
            // var last_name = 'Akhil';
            // full_name = first_name + last_name;
            // document.writeln(full_name)//KonduriAkhil

            // var first_name = 'Konduri';
            // var space = ' ';
            // var last_name = 'Akhil';
            // full_name = first_name +space + last_name;
            // document.writeln(full_name);//output is Konduri Akhil

            // var txt = 'Welcome';
            // txt = 'to';
            // txt = 'India';
            // document.write(txt); // output is India

            // var txt = 'Welcome ';
            // txt += 'to ';
            // txt += 'India ';
            // document.writeln(txt); // Welcome to India

            // var x = 0;
            // x += 100;
            // x += 200;
            // document.writeln(x); // 300

            // var x = '0';
            // x += 100;
            // x += 200;
            // document.writeln(x); // 0100200

             // var x = 100;
            // x += 100;
            // x += '200';
            // x += 400
            // document.writeln(x);200200400

            // var x = 100;
            // var y = 200;
            // var z;
            // z = x + y;
            // document. writeln('<h4> The sum of x and y is: z<h4>');//The sum of x and y is: z

            // var x = 100;
            // var y = 200;
            // var z;
            // z = x + y;
            // document. writeln('<h4> The sum of x and y is: z<h4>');//The sum of x and y is: z

            // var x = 100;
            // var y = 200;
            // var z;
            // z = x + y;
            // document. writeln('<h4> The sum of '+ x +' and ' + y +' is: '+ z +'</h4>');//The sum of 100 and 200 is: 300
        </script>

    </body>
</html>
```