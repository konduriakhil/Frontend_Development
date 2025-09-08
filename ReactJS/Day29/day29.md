# Day 29
# Bootstrap -v5
![alt text](images/img1.png)
![alt text](images/img4.png)
* Create  `Bootstrap` folder and download bootstrap-v5
* extract bootstrap zip file and avail the 2 folders
* Link bootstrap with file created
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap</title>
    
</head>
<body>
    <h1>Hello, World!</h1>
    
</body>
</html>
```
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <title>Bootstrap</title>

</head>
<body>
    <h1>Hello, World!</h1>
    
</body>
</html>
```
* See the difference
![alt text](images/img2.png)
![alt text](images/img3.png)

project-folder/
│── index.html
│── css/
    └── bootstrap.min.css
```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <script src="js/bootstrap.bundle.js" />
    <title>Bootstrap</title>

</head>
<body>
    <h1>Hello, World!</h1>
    
</body>
</html>
```
![alt text](images/img6.png)
![alt text](images/img5.png)
![alt text](images/img7.png)
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <!-- <script src="js/bootstrap.bundle.js" /> -->
    <title>Bootstrap</title>

</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>

        </div>
        <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>

        </div>
    </div>

</body>

</html>
```
* Every `row` contains `12 columns`
![alt text](images/img8.png)
![alt text](<images/img9 .png>)
* For the customization we have to read the manual 
* As mentioned earlier for the class's and their attributes we have to read the manual
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div class="col">
                        <h1>Hello, Akhil</h1>
                  </div>
                  <div class="col">
                        <h1>Hello, Akhil</h1>
                  </div>
                  <div class="col">
                        <h1>Hello, Akhil</h1>
                  </div>

            </div>

      </div>

</body>

</html>
```
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div class="col bg-success m-1">
                        <h1 class="text-white">Hello, Akhil</h1>
                  </div>
                  <div class="col bg-success m-1">
                        <h1 class="text-white">Hello, Akhil</h1>
                  </div>
                  <div class="col bg-success m-1">
                        <h1 class="text-white">Hello, Akhil</h1>
                  </div>

            </div>

      </div>

</body>

</html>
```
![alt text](images/img10.png)
![alt text](images/img11.png)
## Bootstrap Grid System
* Copy some **images** folder into **Bootstrap  folder**
* Break Point reference
![alt text](images/img13.png)
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- <link rel="stylesheet" href="css/bootstrap.min.css" /> -->
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div>
                        <img src="images/01.png"/>
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div>
                        <img src="images/02.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div>
                        <img src="images/03.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div>
                        <img src="images/04.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div>
                        <img src="images/06.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
            </div>

      </div>

</body>

</html>
```
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div class="col">
                        <img src="images/01.png"/>
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col">
                        <img src="images/02.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col">
                        <img src="images/03.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col">
                        <img src="images/04.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col">
                        <img src="images/06.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
            </div>

      </div>

</body>

</html>
```
* Use **sft+ctl+i** and **sft+ctl+m** to see the resolution change
![alt text](images/img12.png)
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div class="col col-sm-12 col-md-3  ">
                        <img src="images/01.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col col-sm-12 col-md-3">
                        <img src="images/02.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col col-sm-12 col-md-3">
                        <img src="images/03.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col col-sm-12 col-md-3">
                        <img src="images/04.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col col-sm-12 col-md-3">
                        <img src="images/06.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col col-sm-12 col-md-3">
                        <img src="images/01.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col col-sm-12 col-md-3">
                        <img src="images/02.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col col-sm-12 col-md-3">
                        <img src="images/03.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>

            </div>

      </div>

</body>

</html>
```

```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div class="col-lg-3 col-md-6">
                        <img src="images/01.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                        <img src="images/02.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                        <img src="images/03.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                        <img src="images/04.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                        <img src="images/06.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                        <img src="images/01.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                        <img src="images/02.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                        <img src="images/03.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>

            </div>

      </div>

</body>

</html>
```
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div class="col-lg-3 col-md-6 border">
                        <img src="images/01.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6 border">
                        <img src="images/02.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6 border">
                        <img src="images/03.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6 border">
                        <img src="images/04.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>


            </div>

      </div>

</body>

</html>
```
* Regarding border there is only **border-1** to **border-5**
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div class="col-lg-3 col-md-6 border border-5">
                        <img src="images/01.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6 border border-5">
                        <img src="images/02.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6 border border-5">
                        <img src="images/03.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>
                  <div class="col-lg-3 col-md-6 border border-5">
                        <img src="images/04.png" />
                        <h4>Some Title Comes here</h4>
                        <p>This is some program and the description about the program</p>
                  </div>


            </div>

      </div>

</body>

</html>
```
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <div class="row">
                  <div class="col">
                        <img height="200" width="200" class="img-thumbnail mx-auto d-block" src="images/workplace.jpg" />
                  </div>
            </div>
      </div>

      </div>

</body>

</html>
```
## Table
### Without class
```jsx

<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <table >
                  <thead>
                        <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Mobile</th>
                              <th>City</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                  </tbody>
            </table>
      </div>

      </div>

</body>

</html>
```
![alt text](images/img14.png)
### With class
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <!-- <script src="js/bootstrap.bundle.js" /> -->
      <title>Bootstrap</title>

</head>

<body>
      <div class="container">
            <table class="table">
                  <thead>
                        <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Mobile</th>
                              <th>City</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                        <tr>
                              <td>1</td>
                              <td>Akhil</td>
                              <td>akhil@gmail.com</td>
                              <td>8799338737</td>
                              <td>Hyderabad</td>
                        </tr>
                  </tbody>
            </table>
      </div>

      </div>

</body>

</html>
```
![alt text](images/img15.png)





