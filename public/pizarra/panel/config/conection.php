<?php
/**
 * Created by PhpStorm.
 * User: laupaj
 * Date: 22/02/2018
 * Time: 12:17 PM
 */
class conection extends PDO
{
    private $tipo_de_base = 'mysql';
    private $host = 'localhost';
    private $nombre_de_base = 'cripto';
    private $usuario = 'sebastian';
    private $contrasena = 'sebastiancripto';

    public function __construct() {
        //Sobreescribo el método constructor de la clase PDO.
        try{

            @parent::__construct($this->tipo_de_base.':host='.$this->host.';dbname='.$this->nombre_de_base, $this->usuario, $this->contrasena);
            @parent::query("SET NAMES 'utf8';");
        }catch(PDOException $e){
            echo json_encode('Ha surgido un error y no se puede conectar a la base de datos. Detalle: ' . $e->getMessage());
            exit;
        }
    }

   /* function index(){
        return mysqli_connect(SERVER, USUARIO, CLAVE, BASE);
    }

    function destroy($db){
        return mysqli_close($db);
    }*/
}