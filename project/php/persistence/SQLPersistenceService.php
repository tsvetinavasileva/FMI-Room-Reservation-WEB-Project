<?php
require_once "PersistenceService.php";

class SQLPersistenceService implements PersistenceService
{
    const ROOM_DB_NAME = "room";
    private $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getRooms()
    {
        $rooms = [];
        $sql = "SELECT * FROM " . self::ROOM_DB_NAME;
        $stmt = $this->conn->query($sql);
        //Here we need to add some logic, so we can retrieve the resources for each room
        while ($room = $stmt->fetch(PDO::FETCH_OBJ)) {
            $rooms[] = $room;
        }

        return $rooms;
    }
}