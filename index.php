<?php

$request = $_SERVER['REQUEST_URI'];
if(false){
    $request = substr($request,4);
}

echo $request;
if($request == "/photowhere/"){
    echo "<br>" . 1 . "<br>";
}

switch ($request) {
    case '/photowhere':
        require './src/views/index.html';
        break;
    case '/photowhere/':
        echo $request;
        require './src/views/index.html';
        break;
    case '/photowhere/map':
        require './src/views/map.html';
        break;
    default:
        http_response_code(404);
        require './src/views/404.html';
        break;
}