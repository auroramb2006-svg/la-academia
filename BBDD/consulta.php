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
        $email = $_POST['email'] ?? '';
        $telefono = $_POST['telefono'] ?? '';
        $motivo = $_POST['motivo'] ?? '';
        $mensaje = $_POST['mensaje'] ?? '';

      

        // Preparar la consulta SQL 
        $sql = "INSERT INTO consulta (nombre, email, telefono, motivo, mensaje) VALUES (:nombre, :email, :telefono, :motivo, :mensaje)";
        
        $stmt = $conexion->prepare($sql);
        $stmt->execute([
            ':nombre' => $nombre,
            ':email' => $email,
            ':telefono' => $telefono,
            ':motivo' => $motivo,
            ':mensaje' => $mensaje
        ]);

        // Redireccionar o mostrar mensaje de éxito
        echo "<script>alert('¡Consulta enviada con éxito!'); window.location.href='contacto.php';</script>";
    }
} catch(PDOException $e) {
    echo "Error al guardar los datos: " . $e->getMessage();
}
?>