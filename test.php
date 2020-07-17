<?php
require("./nodejs.php");

$response = nodejs::run("webhook/emit", "integration-create", ["name"=>"TESTE"]);

echo json_encode($response, JSON_PRETTY_PRINT);
