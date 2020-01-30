<?php


class ResourceRepositorySQL implements ResourceRepository
{
    private $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }


    function getResources()
    {
        return $this->conn->query('SELECT * FROM resource')->fetchAll(PDO::FETCH_ASSOC);
    }
}