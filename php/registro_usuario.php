<?php 

    include 'conexion.php';

    $usuario = $_POST['usuario'];
    $correo = $_POST['correo'];
    $contra = $_POST['contra'];
    

    $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");
    $verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario'");
    $row_verificacion_correo = mysqli_num_rows($verificar_correo);
    $row_verificacion_usuario = mysqli_num_rows($verificar_usuario);

    

    //si es mayor a cero es por que encontro uno

    if($row_verificacion_usuario != 0){
        echo'

            <script>
            
                alert("Este usuario ya esta registrado, intente con otro diferente");
                window.location = "../html/sesion.html";
            
            </script>
    
        ';
    }

    if($row_verificacion_correo != 0){
        echo'

            <script>
            
                alert("Este correo ya esta registrado, intente otro diferente");
                window.location = "../html/sesion.html";
            
            </script>
    
        ';
    }

    if(($row_verificacion_correo == 0) && ($row_verificacion_usuario == 0)){
        $query = "INSERT INTO usuarios(usuario, correo, contra) 
                VALUES('$usuario', '$correo', '$contra')";

        $ejecutar = mysqli_query($conexion, $query);
        echo'

            <script>
            
                alert("Usuario registrado exitosamente");
                window.location = "../html/sesion.html";
            
            </script>

        ';
    }

    mysqli_close($conexion);

?>