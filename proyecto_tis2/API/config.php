<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


$db = [
    'host' => 'localhost',
    'username' => 'root',
    'password' => '',
    'db' => 'bd_prueba'
];

?>