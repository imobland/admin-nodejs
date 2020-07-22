<?php
require("./nodejs.php");

$message = [
  "name" => "body"
];

// WEBHOOK ---------------------------------------------------------------------

// $response = nodejs::run("webhook/emit", $message, [
  //   "event" => "property.update",
  //   "tags"  => ["published"]
  // ]);

// -----------------------------------------------------------------------------

$response = nodejs::run("property/listing", [
  "teste" => "OK"
]);

echo json_encode($response, JSON_PRETTY_PRINT);
