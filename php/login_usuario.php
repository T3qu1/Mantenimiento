<?php
    session_start();

    include 'conexion.php';

    $correo = $_POST['correo'];
    $contra = $_POST['contra'];

    $validar_login_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");

    $validar_login_contra= mysqli_query($conexion, "SELECT * FROM usuarios WHERE contra='$contra'");

    $row_contra = mysqli_num_rows($validar_login_contra);
    $row_correo = mysqli_num_rows($validar_login_correo);
    

    if($row_correo === 0){
        echo'

            <script>
            
                alert("Correo no registrado, ingrese bien los datos");
                window.location = "../html/sesion.html";
            
            </script>
    
        ';     
    }
    if($row_contra === 0){

        echo'

            <script>
            
                alert("Contraseña no correspondiente, ingrese bien los datos");
                window.location = "../html/sesion.html";
            
            </script>
    
        ';

    }
    else{
        $_SESSION['usuario'] = $correo;
        header("location: ../php/temp.php");
        exit();
    }
       




?>