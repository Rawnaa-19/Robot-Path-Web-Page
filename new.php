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


