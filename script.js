


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
  /** */
  
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




