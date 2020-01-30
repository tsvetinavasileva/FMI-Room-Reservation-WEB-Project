<?php
require_once "persistence/resource/ResourceRepository.php";
require_once "persistence/resource/ResourceRepositorySQL.php";
require_once "util/DbConnectionCreator.php";

$conn = DbConnectionCreator::createConnection();
$resourceRepository = new ResourceRepositorySQL($conn);
$resources = $resourceRepository->getResources();
echo (json_encode($resources));