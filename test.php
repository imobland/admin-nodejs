<?php
require("./nodejs.php");

$message = [
  "name" => "body"
];

$response = nodejs::run("webhook/emit", $message, [
  "event" => "property.update",
  "tags"  => ["published"]
]);

echo json_encode($response, JSON_PRETTY_PRINT);
