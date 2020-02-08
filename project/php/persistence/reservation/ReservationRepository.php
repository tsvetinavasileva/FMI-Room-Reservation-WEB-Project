<?php

interface ReservationRepository{
    function getAvailableRooms($startDateTime, $endDateTime);
}
