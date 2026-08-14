<?php
// Datos de conexión a la base de datos de Hostinger
$host = 'localhost';
$dbname = 'u955288513_cursos';
$username = 'u955288513_cursos';
$password = 'LaAcademia16*';

try {
    // 2. Crear la conexión PDO
    $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 3. Recoger los datos de texto enviados por POST
    $nombre = $_POST['name'];
    $apellido = $_POST['surname'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $mensaje = $_POST['mensaje'];

    // 4. Gestionar el archivo PDF adjunto
    if (isset($_FILES['attached']) && $_FILES['attached']['error'] === 0) {
        $archivo = $_FILES['attached'];
        $nombreArchivo = $archivo['name'];
        $tmpArchivo = $archivo['tmp_name'];
        
        // Validar que sea un archivo PDF
        $extension = strtolower(pathinfo($nombreArchivo, PATHINFO_EXTENSION));
        if ($extension === 'pdf') {
            
            // Definir la carpeta donde se guardarán los currículums (crea una carpeta llamada 'uploads' en la raíz de tu web)
            $carpetaDestino = "../uploads/";
            if (!file_exists($carpetaDestino)) {
                mkdir($carpetaDestino, 0777, true);
            }

            // Renombrar el archivo con un número único basado en el tiempo para que no se repita
            $nombreUnico = time() . "_" . preg_replace('/[^a-zA-Z0-9._-]/', '', basename($nombreArchivo));
            $rutaFinal = $carpetaDestino . $nombreUnico;

            // Mover el archivo desde la ruta temporal del servidor a la carpeta final
            if (move_uploaded_file($tmpArchivo, $rutaFinal)) {
                
                // Ruta que guardaremos en la base de datos
                $rutaParaBd = "uploads/" . $nombreUnico;

                // 5. Insertar los datos en la base de datos de forma segura usando consultas preparadas
                $sql = "INSERT INTO candidatos (nombre, apellido, email, telefono, mensaje, cv) 
                        VALUES (:nombre, :apellido, :email, :telefono, :mensaje, :cv)";
                
                $stmt = $conexion->prepare($sql);
                $stmt->execute([
                    ':nombre' => $nombre,
                    ':apellido' => $apellido,
                    ':email' => $email,
                    ':telefono' => $telefono,
                    ':mensaje' => $mensaje,
                    ':cv' => $rutaParaBd
                ]);

                echo "¡Candidatura enviada correctamente! Nos pondremos en contacto contigo.";

            } else {
                echo "Hubo un error al guardar el archivo PDF en el servidor.";
            }

        } else {
            echo "El archivo adjunto debe ser obligatoriamente un formato PDF.";
        }

    } else {
        echo "Es obligatorio adjuntar un currículum en PDF.";
    }

} catch (PDOException $e) {
    echo "Error de conexión o en la base de datos: " . $e->getMessage();

}
?>