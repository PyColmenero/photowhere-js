<?php

$request = $_SERVER['REQUEST_URI'];
if(false){
    $request = substr($request,11);
}

echo $request;

switch ($request) {
    case '/photowhere/':
        require './src/views/index.html';
        break;
    case '/photowhere':
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