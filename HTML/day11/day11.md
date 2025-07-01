```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container{
      display: flex;
      height: 300px;
      flex-direction: row; /* row-reverse, column and column-reverse*/
      background-color: lightgray;
      padding: 20px;
      justify-content: space-between;
      align-items: center;
    }

    .flex-item{
      background-color: dodgerblue;
      color: white;
      padding: 20px;
      margin: 10px;
      font-size: 20px;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item" style="width: 150px;">Item 1</div>
    <div class="flex-item" style="width: 400px;">Item 2</div>
    <div class="flex-item" style="width: 275px;">Item 3</div>
  </div>

</body>
</html>
```
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
      /* flex-wrap: wrap-reverse; */
      background-color: lightgray;
      align-items: center;/* try: flex-start, flex-end, center, stretch */
      padding: 20px;
      gap: 10px; /* Optional for spacing between items */
      flex-flow: column wrap-reverse;
    }

    .flex-item {
      background-color: tomato;
      color: white;
      font-size: 20px;
      padding: 20px;
      width: 200px;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item item1">Item 1</div>
    <div class="flex-item item2">Item 2</div>
    <div class="flex-item item3">Item 3</div>
    <div class="flex-item item4">Item 4</div>
    <div class="flex-item item5">Item 5</div>
    <div class="flex-itemi item6">Item 6</div>
  </div>

</body>
</html>
```
