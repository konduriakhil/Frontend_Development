# class30
## Document Object Mode(DOM)
* Manipulating the DOM elements is called DOM
* 
* `document `  is the predefined object.
    * **queryByselector()**
    * **write()**
    * **writeln()**
    * **getElementById()**
## Document Object Manipulation
* `Manipulation ` means 
* Selecting the DOM elements
* Creating DOM elements
* Inserting an element into the DOM
* Updating the DOM element
* Remove elements from the DOM
## Selecting the DOM elements
```js
document.getElementById();
document.getElementsByClassName();
document.getElementByTagName();
document.getElementByName();
document.querySelector();
document.querySelectorAll();
```
### getElementById()
* By using this method, we can select an element based on ID
* This method return only one element
### getElementsByTagName()
* By using this method, we can select  elements based on Tag name
* This method return all elements as an array
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1 id="title1" >HTML Training</h1>
        <h1 id="title2" >CSS Training</h1>
        <h1 id="title3" >JQuery Training</h1>
        <h1 id="title4" >React Training</h1>
    </div>

    <script>

        var elements = document.getElementsByTagName('h1')
        console.log(elements)

    </script>
    
</body>
</html>

```
![alt text](images/img1.png)
1. Selecting the DOM Elements

document.getElementById() : by using this method, we can select an element based on id, this method
returns only one element

document.getElementsByClassName ():
by using this method, we can select all the element based on class of the element, this method
returns all the elements as an array

document.getElementsByTagName ():
by using this method, we can select all the element based on name of the element, this method
returns all the elements as an array

document.getElementsByName ();

by using this method, we can select all the element based on attribute name of the element, this
method returns all the elements as an array

document.querySelector ();

by using this method, we can select an element based on selector, this method returns only one element.

document.querySelector ();
by using this method, we can select an element based on selector, this method returns all the elements as an array as (NodeList).