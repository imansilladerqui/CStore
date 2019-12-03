<?php
$path = '/pizarra/panel';
?>
<!-- Compiled and minified CSS -->
<!doctype html>
<html lang="es">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Panel Crypto</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="<?=$path?>/assets/css/materialize.min.css">
        <meta author="Group Celit" data="www.group-celit.com" contact="info@group-celit.com">
        <style>
            .border-bottom{
                border-bottom: 1px solid rgba(160,160,160,0.2)
            }

        </style>
    </head>
    <body>
        <header>
            <nav class="nav-extended light-blue darken-3">
                <div class="nav-wrapper ">
                    <a href="<?=$path?>/currencies" class="brand-logo center ">Panel</a>
                    <ul id="slide-out" class="side-nav">
                        <li><a href="<?=$path?>/currencies"><i class="material-icons dp48">contacts</i>Currencies</a></li>
                    </ul>
                    <ul class="right">
                        <li>
                            <a class="btn btn-floating pulse light-blue darken-4" id="menu" href="#" data-activates="slide-out" ><i class="material-icons">menu</i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>