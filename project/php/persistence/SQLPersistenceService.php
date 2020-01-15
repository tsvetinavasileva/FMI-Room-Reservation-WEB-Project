<?php
require_once "PersistenceService.php";

class SQLPersistenceService implements PersistenceService
{
    const ROOM_TABLE = "room";
    const BUILDING_TABLE = "building";
    private $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getRooms()
    {
        $rooms = [];
        $sql = "SELECT * FROM " . self::ROOM_TABLE;
        $stmt = $this->conn->query($sql);
        //Here we need to add some logic, so we can retrieve the resources for each room
        while ($room = $stmt->fetch(PDO::FETCH_OBJ)) {
            $rooms[] = $room;
        }

        return $rooms;
    }

    public function getBuildings() {
        $buildings = [];
        $sql = "SELECT name FROM " . self::BUILDING_TABLE;
        $stmt = $this->conn->query($sql);
        while ($building = $stmt->fetch(PDO::FETCH_OBJ)) {
            $buildings[] = $building;
        }

        return $buildings;
    }
}