<?php
// Datos de conexión (ajusta con los tuyos)
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "bd_software";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta
$sql = "SELECT id_empleado, nombre,cedula , email, password, direccion, edad, tarifa_salarial, rol, estado FROM empleados";
$resultado = $conn->query($sql);

$empleados = [];

if ($resultado && $resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $empleados[] = $fila;
    }
}

// Devolver JSON
header('Content-Type: application/json; charset=utf-8');
echo json_encode($empleados);

// Cerrar conexión
$conn->close();
?>
