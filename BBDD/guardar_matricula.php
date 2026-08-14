<?php
// Datos de conexión a la base de datos de Hostinger
$host = 'localhost';
$dbname = 'u955288513_cursos';
$username = 'u955288513_cursos';
$password = 'LaAcademia16*';

try {
    // Conectar a la base de datos usando PDO
    $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Comprobar si se han enviado los datos por POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST['nombre'] ?? '';
        $apellidos = $_POST['apellidos'] ?? '';
        $email = $_POST['email'] ?? '';
        $mensaje = $_POST['mensaje'] ?? '';

        // Juntar las asignaturas seleccionadas (vienen como arrays de checkboxes)
        $asig_2h = isset($_POST['asig_2h']) ? implode(', ', $_POST['asig_2h']) : '';
        $asig_3h = isset($_POST['asig_3h']) ? implode(', ', $_POST['asig_3h']) : '';

        // Preparar la consulta SQL 
        $sql = "INSERT INTO matriculas (nombre, apellidos, email, asig_2h, asig_3h, mensaje) VALUES (:nombre, :apellidos, :email, :asig_2h, :asig_3h, :mensaje)";
        
        $stmt = $conexion->prepare($sql);
        $stmt->execute([
            ':nombre' => $nombre,
            ':apellidos' => $apellidos,
            ':email' => $email,
            ':asig_2h' => $asig_2h,
            ':asig_3h' => $asig_3h,
            ':mensaje' => $mensaje
        ]);

        // Redireccionar o mostrar mensaje de éxito
        echo "<script>alert('¡Matrícula solicitada con éxito!'); window.location.href='index.php';</script>";
    }
} catch(PDOException $e) {
    echo "Error al guardar los datos: " . $e->getMessage();
}
?>