<?php
class nodejs
{
    public static $node = "node";
    public static $path = "src";

    public static function run()
    {
        $node = self::$node;
        $path = self::$path;

        $args = base64_encode(json_encode(func_get_args()));
      
        $command = "$node $path/index.js --base64 $args 2>&1";
        
        exec($command, $lines);

        return $lines;
    }
}