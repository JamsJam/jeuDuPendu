<?php
session_start();

if(!isset($_SESSION["mot"])){

    header("Location: ../index.php");

}
else{

    var_dump($_SESSION);
    session_destroy();

}
?>