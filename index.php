<?php

$request = $_SERVER['REQUEST_URI'];

if(true){
    $request = substr($request,11);
}

$request = explode("/",$request);
$root = $request[1];
$root = "/" . explode("?",$root)[0];

switch ($root) {
    case '/api':
        require './api/endpoint.php';
        break;
    case '/n':
        require './normalization.php';
        break;
    case '/':
        require './src/views/index.html';
        break;
    case '/map':
        require './src/views/map.html';
        break;
    case '/contribute':
        require './src/views/contribute.html';
        break;
    case '/contribute-images':
        require './src/views/contribute-images.html';
        break;
    case '/login':
        require './src/views/login.html';
        break;
    case '/signup':
        require './src/views/signup.html';
        break;
    case '/tag':
        require './src/views/tag.html';
        break;
    case '/profile':
        require './src/views/profile.html';
        break;
    case '/frame':
        require './src/views/frame.html';
        break;
    case '/near':
        require './src/views/near.html';
        break;
    case '/popular':
        require './src/views/popular.html';
        break;
    default:
        http_response_code(404);
        require './src/views/404.html';
        break;
}