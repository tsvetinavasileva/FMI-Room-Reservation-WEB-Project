<?php


class FeatureRepositorySQL implements FeatureRepository
{
    private $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }


    function getResources()
    {
        return $this->conn->query('SELECT * FROM feature')->fetchAll(PDO::FETCH_ASSOC);
    }
}