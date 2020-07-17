<?php
//
class nodejs
{
    public static $node = "node";

    public static function run()
    {
        $node = self::$node;

        $args = base64_encode(json_encode(func_get_args()));
      
        $command = "$node src/index.js --base64 $args 2>&1";
        
        exec($command, $lines);

        return $lines;
    }
}

nodejs::$node = "node";