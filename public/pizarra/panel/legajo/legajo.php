<?php
/**
 * Created by PhpStorm.
 * User: laupaj
 * Date: 22/02/2018
 * Time: 12:16 PM
 */
require_once '../config/conection.php';
class Legajo
{

    public function index()
    {
        $conection = new Conection();
        $and = '';
        $filter = [];

        if (isset($_POST['cargo']) and $_POST['cargo'] <> 'todos'){
            $and = ' AND l.CARGO = "'.$_POST['cargo'].'"';

            $filter['CARGO'] = $_POST['cargo'];
        }

        $query ='
                  SELECT * 
                  FROM legajos l
                  WHERE 1=1 '. $and
                  ;
        $consulta = $conection->prepare($query);
        $consulta->execute();
        $result = $consulta->fetchAll(PDO::FETCH_ASSOC);

        $conexion = null;

        $params['personales'] = $result;
        $params['params'] = $filter;
        return $params;


     /*   $db = conection::index();

        $q = $db->query('SELECT * FROM legajos');
        $result = mysqli_fetch_all($q);

        conection::destroy($db);
        return $result;*/
    }

    function save(){

    }

    function delete(){

    }
}
if(isset($_POST['function']) && !empty($_POST['function'])) {
    $action = $_POST['function'];
    switch($action) {
        case 'index' : Legajo::index();
        break;

        // ...etc...
    }
}
/*if(isset($_GET['function'])) {

    $product= new Legajo();
    $product->$_GET['function']();
}*/
