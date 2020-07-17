<?php
//
class nodejs
{
    public static function run()
    {
        $file = "index";
        $node = 'node';
        $path = realpath('.');
      
        $args = base64_encode(json_encode(func_get_args()));
      
        $command = "cd $path && $node src/{$file}.js --base64 $args 2>&1";
        
        exec($command, $retval);

        return $retval;
    }
}
