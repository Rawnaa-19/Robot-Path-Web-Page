
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
