# Class-6
--------------
## Functions in JS
* What is a Function/Taks/Event/Activity/Work?
      * A Function is a reusable piece of code
      * A Function is a block of code to execute some task.
# ## syntax 
```sh
function <function_name>(parameters1, parameter2, .......)
{
    // some code
    // some logic
}
```
### Parameters
* purpose of passing parameter to a function is to parametrise the function or code.
* They can hold some values
* sometimes the functional logic may depends upon the parameters
* it is nothing but to save some values
* All the parameters passed to  a function are lcoal to that function. we can not access the function parameters outside
* The scope of the parameter is available with in the function only.
* Once function is created we have to invoke or call a function.
* we can call a function by using its name.
```html
<!-- Starting of HTML-->


<html>
    <head>
        <title>Tab of JS</title>
    </head>
    <body>
        <h1>Function in JS</h1>
        <script>

            function welcome()
            {
            document.writeln('<h2>hello world</h2>')
            document.writeln('<p>Some Description...</p>')       
             }
             
            welcome();// calling fucntion
            welcome();


        </script>
    </body>
</html>
```
* The variables(let, var, const) which are declared inside a function are called local variable
* the scope of a local variable is within the function only.
* We can not access outside of a functionn
```html

<!-- Starting of HTML-->


<html>
    <head>
        <title>Tab of JS</title>
    </head>
    <body>
        <h1>Function in JS</h1>
        <script>

            function welcome()
            {
            let x = 100;
            var y = 200;
            const z = 100;
            document.writeln('<h2>hello world</h2>')
            document.writeln('<p>Some Description...</p>')       
             }          

             document.writeln(x)//  output  is coming because of x is defined inside the function
             document.writeln(y);
             document.writeln(z);

        </script>
    </body>
</html>
```
### Global variable and Local Variable
* A variable inside a function is local and outside of it is global.
*  scope of it is within the entire file
*  we can access inside and outside of the function also.
*  All the function parameters are act as a local variables
```html

<!-- Starting of HTML-->


<html>
    <head>
        <title>Tab of JS</title>
    </head>
    <body>
        <h1>Function in JS</h1>
        <script>

            let x = 100;
            var y = 200;
            const z = 100;
            function welcome()
            {
                document.writeln(x,y,z)
            document.writeln('<h2>hello world</h2>')
            document.writeln('<p>Some Description...</p>')       
             }          
             welcome()
            document.writeln(x);
             document.writeln(y);
             document.writeln(z);

        </script>
    </body>
</html>
```
### Function with parameters

```html

<!-- Starting -->


<html>
    <head>
        <title>Tab of JS</title>
    </head>
    <body>
        <h1>Function in JS</h1>
        <script>

             function add(x, y)
             {
                let z = x + y;
                document.writeln('<h1>'+z+'</h1>');
             }
             add(100,399);
             add(200, 300);
             add();//NaN (not a number)
             add(152);//NaN (not a number)
             add('akhil', ' sai');//akhil sai //concatination

        </script>
    </body>
</html>
```
### return types

* In realtime scenario we use  `return` from function not `document.write()`.
```html

<!-- Starting of HTML-->


<html>
    <head>
        <title>Tab of JS</title>
    </head>
    <body>
        <h1>Function in JS</h1>
        <script>

             function add(x, y)
             {
                let z = x + y;
                return z;
             }
             document.write(add(100, 399) + "<br>");
             document.write(add(100, 200) + "<br>");
             document.writeln(add('akhil', ' sai'));//akhil sai //concatination


        </script>
    </body>
</html>
```