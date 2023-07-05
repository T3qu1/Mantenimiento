<?php
include 'conexion.php';
session_start();

if (!isset($_SESSION['usuario'])){
    header("location: ../html/sesion.html");
}

$iduser = $_SESSION['usuario'];

$sql = mysqli_query($conexion, "SELECT correo, usuario FROM usuarios WHERE correo = '$iduser' ");
$row = $sql->fetch_array()


?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Notflix</title>
        <meta name="title" content="Notflix">
        <meta name="description" content="Popular movie made by Camila">

        <link rel="shortcut icon" href="../img/logoIcon.svg" type="image/svg+xml">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="../css/temp.css">

        <script src="../js/temp.js" defer></script>
        <script src="../js/indexTemp.js" type="module"></script>

    </head>
    <body>
        <header class="header">
            <a href="./temp.php" class="logo">
                <img src="../img/logoIcon.svg" width="20" height="32" alt="Notflix home">
            </a>

            <div class="search-box" search-box>
                <div class="search-wrapper" search-wrapper>
                    <input type="text" name="search" aria-label="search movies" placeholder="Search any movies..." class="search-field" autocomplete="off" search-field>
                    <img src="../img/search.png" width="15" height="15" alt="search" class="leading-icon">
                </div>

                <button class="search-btn" search-toggler>
                    <img src="../img/close.png" width="15" height="15" alt="close search box">
                </button>
            </div>

            <button class="search-btn"search-toggler menu-close>
                <img src="../img/search.png" width="15" height="15" alt="open search box">
            </button>

            <button class="menu-btn" menu-btn menu-toggler>
                <img src="../img/menu.png" width="15" height="15" alt="open menu" class="menu">
                <img src="../img/menu-close.png" width="15" height="15" alt="close menu" class="close">
            </button>

            <button class="perfil-btn" perfil-btn usuario-toggler>
                <small>Bienvenid@</small>
                <?php 
                    
                    echo $row["usuario"];
                    
                
                 ?>
            </button>

        </header>

        <main>
            <!--
                SIDEBAR
            -->

            <nav class="sidebar" sidebar></nav>

            <nav class="sidebarUser" sidebarUser></nav>

            <div class="overlay" overlay menu-toggler></div>


            <article class="container" page-content></article>
        </main>

    </body>
</html>