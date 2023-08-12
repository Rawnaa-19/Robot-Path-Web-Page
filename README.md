# Robot Path Web Page
## Table of Contents : 
1. [Introduction](#Introduction)
1. [HTML](#HTML)
    - [Code](#Code)
1. [CSS](#CSS)
    - [Code](#Code)
    - [Page Layout](#Page-Layout)
    - [Hover](#Hover)
1. [PHP](#PHP)
     - [Insert Code](#Insert-into-database-Code)
     - [Database](#Database)
     - [Retrieve Code](#Retrieve-Code)
     - [Retrieve Page](#Retrieve-Page)
1. [Javascript](#Javascript)
     - [Code](#Code)
1. [The Final Output](#The-Final-Output)

## Introduction
The second task for the Software Department is to create a web page with five buttons and a canvas.When a button is pressed a line is drawn in the canvas. Then value of the button will be stored in a database.

## HTML 
In the html file, I have declared five buttons left, right, forward, backward, and stop and a canvas.

### Code
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Draw Robot Path</title>
    <link rel = "icon" href = 
"https://yt3.googleusercontent.com/ytc/AOPolaRAsVUd0NPDZpII-TSC3t1Tx2annzqCm2Aa8I2e=s900-c-k-c0x00ffffff-no-rj" 
        type = "image/x-icon">
  </head>
  <body>
     <div class="row">
       <div class="gridLayOut1">
            
             <canvas class="column-two" id="canvas" height="650" width="550"></canvas> 
           <button class="delete" id ="delBtn" onclick="clearCanvas()" type="button" value="Delete">Delete</button>       
             
      </div>
      <div class="gridLayOut2">
             <button class="span-three" id ="forwardBtn" onclick="drawPath('Forward')" type="button" value="Forward"></button>
            <button class="left" id ="leftBtn" onclick="drawPath('Left')" type="button"  value="Left"></button>
            <button class="stop" id ="stopBtn" onclick="drawPath('Stop')" type="button" value="Stop">Stop</button>
            <button class="right" id ="rightBtn" onclick="drawPath('Right')" type="button" name="button" value="Right"></button>               
            <button class="span-three" id ="backBtn" onclick="drawPath('Backward')" type="button" name="button" value="Backward"></button>
      <p id ="status" class="paragraph"></p>
          </div>
     
      </div>        
 <script src="script.js"> </script>
          


  </body>
</html>
```

## CSS
The CSS code is included with the html file. By using CSS, the buttons and canvas were styled and positioned according to their values, with some actions added when the buttons were hovered over.

### Code
```
        <style>
      * {
  box-sizing: border-box;
}
      button[value="Stop"] {
        background-color: #D8AED3;  
        border: transparent;  
        margin-left: 80%;
      }
      button[value="Delete"] {
        width: 95px;
        height: 40px;
        background-color: transparent;
        background-image: url('https://img.icons8.com/ios-filled/50/FFFFFF/waste.png');
        background-size: 17px;
        background-position-x: 8%;
        background-position-y: 50%;
        padding-left: 20%;
        background-repeat: no-repeat; 
        border-radius: 8px;
        color: white;
        box-shadow: 2px 2px 4px 4px #9182c441;
        transition: all 0.5s;
        cursor: pointer;
        font-family: Georgia, serif;
        border: #9182C4;
        font-size: 20px;
      }
      button:hover[value="Delete"] {
        box-sizing: border-box;
        width: 97px;
        height: 41px;
      }
      button[value="Forward"] , button[value="Stop"] ,button[value="Backward"],button[value="Left"],button[value="Right"]{
        border-radius: 12px;
        width: 140px;
        height: 60px;
        padding: 3px;
        color: white;
       margin-left: 5%;
        margin-right: 5%;
        transition: all 0.5s;
        cursor: pointer;
        font-size: 20px;
        font-family: Georgia, serif;
      }

      button:hover[value="Stop"] {
        background-color: red;
        border-color: transparent;
      }

      button[value="Left"] {
        background-color: transparent;
        width: 90px;
        height: 70px;
        background-image: url('https://img.icons8.com/ios-filled/50/FFFFFF/sort-left.png');
        background-size: 70px;
        background-position-x: 50%;
        background-position-y: 50%;
        background-repeat: no-repeat; 
        border: transparent;
      }
      button:hover[value="Left"] {
        background-position-x: 0%;
        box-shadow: 4px 4px 14px 8px #9182C4;
      }
      button[value="Forward"] {
        background-color: transparent;
        width: 90px;
        height: 70px;
        background-image: url('https://img.icons8.com/ios-filled/50/FFFFFF/sort-up.png');
        background-size: 70px;
        background-position-x: 50%;
        background-position-y: 50%;
        background-repeat: no-repeat; 
        border: transparent;
        margin-left: 10%;
      }      
      button:hover[value="Forward"] {
        box-shadow: 4px 4px 14px 8px #9182C4;
      }
      button:hover[value="Backward"] {
        box-shadow: 4px 4px 14px 8px #9182C4;
      }
      button[value="Backward"] {
        background-color: transparent;
        width: 90px;
        height: 70px;
        background-image: url('https://img.icons8.com/ios-filled/50/FFFFFF/sort-down.png');
        background-size: 70px;
        background-position-x: 50%;
        background-position-y: 50%;
        background-repeat: no-repeat; 
        border: transparent;
        margin-left: 10%;
      }
      button[value="Right"] {
        background-color: transparent;
        width: 90px;
        height: 70px;
        background-image: url('https://img.icons8.com/ios-filled/50/FFFFFF/sort-right.png');
        background-size: 70px;
        background-position-x: 50%;
        background-position-y: 50%;
        background-repeat: no-repeat; 
        font-size: 0;
        border: transparent;

      }
      button:hover[value="Right"] {
        background-position-x: 90%;
        box-shadow: 4px 4px 14px 8px #9182C4;
      }
     
      body {
   /* background: linear-gradient(to left,#aea2d6,#aea2d6);*/
    background-color: #aaa0cb;
    }
    canvas {
        border: 1px solid #9182C4;
        box-shadow: 4px 4px 14px  #9182C4 , 4px 4px 14px 8px #9182C4;
        border-radius: 8px;
      }
    .gridLayOut2 {
      display: grid;
  float: right;
  width: 50%;
  margin-top: 5%;
  grid-template-rows: repeat(4);
  grid-template-columns: repeat(3);
  
        height: 700px;
        
    }
    .gridLayOut1 {
      display: grid;
  float: left;
  width: 40%;
  margin-left: 2%;
  margin-top: 2%;
  grid-template-rows: repeat(2);
  grid-template-columns: repeat(2);
    }
   .span-three{
      grid-column: 2;
    }
   .left{
     grid-row: 2;
     grid-column: 1;
    }
    .stop {
      grid-row: 2;
      grid-column: 2;
    }
    .right {
      grid-row: 2;
      grid-column: 3;
    }

    .row:after {
  content: "";
  display: table;
  clear: both;
  
}
.delete {
    grid-column: 2;
    margin-top: 50%;
    margin-left: 30%;
    }
.paragraph {
  grid-column: 2;
  grid-row: 4;

}
    </style>
```
### Page Layout

<kbd> **Figure 1** <br><br>*Web Page*<br><br> <kbd>![image](https://github.com/Rawnaa-19/Robot-Path-Web-Page/assets/106926557/73fefe29-e7d6-4a78-b7af-c13b22cc2483)</kbd></kbd>

### Hover

https://github.com/Rawnaa-19/Robot-Path-Web-Page/assets/106926557/fe81b1ac-9d86-4d80-8a95-deba5ce3ce72

## PHP
There are two PHP files used in this task. The first file is attached under the following name "new.php", it is responsible for inserting the value of the button pressed into the database. The second file attached under the  name "lastButton.php" is responsible for retrieving the last entered value from the database.
### Insert into database Code
```
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
$direction = $_POST['direction'];
$con = mysqli_connect ("localhost","root","","db_path");  

if (!$con)  
  {  
  die ('Could not connect: ' . mysql_error());  
  }  
else{
  $sql = "INSERT INTO button_presses (direction) VALUES ('$direction')";
  mysqli_query($con, $sql);
}
?>
```
### Database
I have created a database with one table that has two columns the first column is the id that increaments automatically whenever a new row is added and the second column is the direction.<br><br>

<kbd> **Figure 2** <br><br>*Database*<br><br> <kbd>![image](https://github.com/Rawnaa-19/Robot-Path-Web-Page/assets/106926557/2d90a730-83a9-4e36-bbac-0706773dcc36)</kbd></kbd>

### Retrieve Code
```
<?php
$con = mysqli_connect ("localhost","root","","db_path");  
if (!$con)  
  {  
  die ('Could not connect: ' . mysql_error());  
  }

$quer = "SELECT direction FROM  button_presses ORDER BY id DESC LIMIT 1 ";

$result = $con->query($quer);
//echo "$result";
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        echo $row['direction'];
    }
}
else{
    echo"no result";
}
?>
```
### Retrieve Page
The last value stored in the database is left. Therefore, the retrieve code should print out "Left".<br><br>
<kbd> **Figure 3** <br><br>*Database Last Value*<br><br> <kbd>![image](https://github.com/Rawnaa-19/Robot-Path-Web-Page/assets/106926557/d5db313f-b393-48af-87d9-c5804fd69dbc)</kbd></kbd><br><br>

<kbd> **Figure 4** <br><br>*Last Value Retrieved*<br><br> <kbd>![image](https://github.com/Rawnaa-19/Robot-Path-Web-Page/assets/106926557/c218da62-703a-449e-b415-4d147925afd1)</kbd></kbd>
## Javascript
Javascript here is used to draw on the canvas. The js file is attached under the name "script.js"
```
let forwardBtn = document.getElementById("forwardBtn"); 
let stopBtn = document.getElementById("stopBtn"); 
let leftBtn = document.getElementById("leftBtn"); 
let rightBtn = document.getElementById("rightBtn"); 
let backBtn = document.getElementById("backBtn"); 
let startBtn = document.getElementById("startBtn");
let delBtn = document.getElementById("delBtn");
let saveBtn = document.getElementById("saveBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#FF0000";
ctx.lineWidth = "2"
let x =250;
let y=640;
function drawPath(direction){ 
  const http = new XMLHttpRequest();
          let newX = x;
          let newY = y;
          switch (direction) {
            case 'Left':
              newX -= 30;
              break;

            case 'Right':
              newX += 30;
              break;

            case 'Backward':
              newY += 30;
              break;

            case 'Forward':
                newY -= 30;
                break;

            case 'Stop':
             drawPoint(direction,newX,newY);
                break;
            default:
              break;
          }
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(newX, newY);
          ctx.stroke();
          x = newX;
          y = newY;
          ajax(direction);
}
function drawPoint(direction,newX,newY){
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.arc(newX, newY, 5, 0 * Math.PI, 2 * Math.PI);
      ctx.fill();                    
}
function clearCanvas(){
  canvas.width = canvas.width
  ctx.fillStyle = "#FF0000";
  ctx.lineWidth = "2"
   x =250;
   y=640;
}
function ajax(direction) {
  var path = "direction=" + direction;
  var xhr = new XMLHttpRequest();
  var url = "http://localhost/web2/new.php"; // Update the URL with the correct protocol and full path
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var returnData = xhr.responseText;
        //document.getElementById("status").innerHTML = returnData;
      } else {
        document.getElementById("status").innerHTML = "Error: " + xhr.status;
      }
    }
  };
  xhr.send(path);
}
```
## The Final Output



https://github.com/Rawnaa-19/Robot-Path-Web-Page/assets/106926557/cacbabac-00a3-4f93-ae71-6e75b42be13d





