<?php
require_once "persistence/SQLPersistenceService.php";
require_once "util/DbConnectionCreator.php";

$conn = DbConnectionCreator::createConnection();
$persistenceService = new SQLPersistenceService($conn);
$buildings = $persistenceService->getBuildings();
echo json_encode($buildings);
