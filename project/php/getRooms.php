<?php
require_once "persistence/SQLPersistenceService.php";
require_once "util/DbConnectionCreator.php";

$conn = DbConnectionCreator::createConnection();
$persistenceService = new SQLPersistenceService($conn);
$rooms = $persistenceService->getRooms();
echo json_encode($rooms);

