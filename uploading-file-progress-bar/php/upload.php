<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if(isset($_FILES["file-upload"])) {
  if ($_FILES["file-upload"]["error"] > 0) {
    echo "Error: " . $_FILES["file-upload"]["error"] . "<br>";
  } else {
    move_uploaded_file($_FILES["file-upload"]["tmp_name"], "uploads/" . $_FILES["file-upload"]["name"]);
    echo "File uploaded successfully.";
  }
}

?>