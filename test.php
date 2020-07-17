<?php
require("./nodejs.php");

$message = ["name"=>"TESTE"];

$response = nodejs::run("webhook/emit", $message, [
  "event" => "property-delete",
  "tags"  => "published"
]);

echo json_encode($response, JSON_PRETTY_PRINT);
