<?php
/**
 * Created by PhpStorm.
 * User: laupaj
 * Date: 22/02/2018
 * Time: 02:27 PM
 */
require_once '../config/conection.php';

class Cargo
{
    public function index()
    {
        $conection = new Conection();
        $and = '';

        $query = "
                  SELECT l.CARGO 
                  FROM legajos l
                  GROUP BY l.CARGO 
                  ";

        $consulta = $conection->prepare($query);
        $consulta->execute();
        $result = $consulta->fetchAll(PDO::FETCH_ASSOC);
        $conexion = null;

        return $result;
    }
}