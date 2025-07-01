# Class-2 
============
	
* Client Side applications JS is very important and it occupies 98%

* `mdn web docs` add it to chrome

## concepts:-
**Basics** 
**objects**
**arrays**(these are very important in python, java and many other 			programming languages)
**Arrays**, **Strings**, **Math**
**DOM**
**Object Oriented JS**
**Class, Object, Constructor, this, inheritance**
**Closures**
        **HOF**
**Callbacks, Promises, async, await**
	
## Where to add javascript to an HTML document ?

* By using `<script></script>` tag, we can add js to an HTML document

## Where can i add script tag?

* head or body or both

****
if we want to execute some logic before body has been loaded, then add the <script> in <head> section

****
if we want to execute some logic after body has compltely loaded, then add the <script> before closing
</body> section

printing ouput

`document.write()I`

```html
<html>
<head>
<title>Welcome to JavaScript</title>
<script>
// some JavaScript code
</script>

</head>
<body>

<h1>Welcome to JavaScript</h1>
<script>
// some javascript Code
</script>

<script>
document.write("Welcome to Js");
</script>
</body>
</html>
```
	* For printing we have pre defined function `document.write('')`

* If we want to log some message in the console part of inspect
	* This console.log is specifically for developers only.
```html
<html>
<head>
<title>Welcome to JavaScript</title>
<script>
// some JavaScript code
document.write("Hello");
</script>

</head>
<body>

<script></script>

<h1>Welcome to JavaScript</h1>
<script>
// some javascript Code
</script>

<script>
document.write('<h1>Welcome to Js, from Sunadh</h1>');
console.log ("This is Ram")
</script>
</body>
</html>
```

```html
<html>
<head>
<title>Welcome to JavaScript</title>
<script>
// some JavaScript code
document.write("Hello");
alert('Welcome')
</script>

</head>
<body>

<script></script>

<h1>Welcome to JavaScript</h1>
<script>
// some javascript Code
</script>

<script>
document.write('<h1>Welcome to Js, from Sunadh</h1>');
console.log ("This is Ram")
</script>
</body>
</html>
```
