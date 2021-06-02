<?php

header('Access-Control-Allow-Origin: http://localhost:8100');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Content-type: application/json');




$db = [
    'host' => 'localhost',
    'username' => 'root',
    'password' => '',
    'db' => 'bd_prueba'
];


?>