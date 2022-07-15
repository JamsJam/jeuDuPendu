<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./header/headersStyle.css">

    <title>Document</title>
</head>
    <body>
        <?php
            include "header/header.html"
        ?>        



        <main >
            
            <div class="container">
                <h2>Nouvelle partie</h2>
                <div class="form">
                    <form  action="index.php" method="POST">
                    
                    
                    <div>
                        
                        <label for="Mot">
                            Choisissez un mot
                        </label>
                        <input type="text" name="mot" >

                    </div>
                    

                    <div>
                        
                        <label for="tour">
                            Choisissez le nombre de tours
                        </label>
                        <input type="number" name="tour" >

                    </div>


                    <div>
                        
                        <input type="submit" value=" Commencer la partie">

                    </div>
                        
                        
                        
                        
                    </form>
                </div>
            </div>
        </main>
    </body> 
</html> 
<?php

    if (isset($_POST["mot"])) {
        session_start();
        $_SESSION["mot"] = strval($_POST["mot"]);
        $_SESSION["tour"] = intval($_POST["tour"]);
        header("Location: ./game/jeu.php");
    }
    

?>