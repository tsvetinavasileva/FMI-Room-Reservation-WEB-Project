<?php
require_once "persistence/SQLPersistenceService.php";

$conn = new PDO('mysql:host=localhost:3306;dbname=project', 'root', '');
$persistenceService = new SQLPersistenceService($conn);
$rooms = $persistenceService->getRooms();
echo json_encode($rooms);

