<?php
require_once "persistence/resource/FeatureRepository.php";
require_once "persistence/resource/FeatureRepositorySQL.php";
require_once "util/DbConnectionCreator.php";

$conn = DbConnectionCreator::createConnection();
$featureRepository = new FeatureRepositorySQL($conn);
$features = $featureRepository->getResources();
echo (json_encode($features));