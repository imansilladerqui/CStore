<?php
/**
 * Created by PhpStorm.
 * User: laupaj
 * Date: 23/02/2018
 * Time: 08:38 AM
 */
require_once '../config/conection.php';

class Currencie
{
    public function index($activo = 0)
    {
        $conection = new Conection();
        $and = '';
        if(isset($activo) AND $activo > 0){
            $and = "AND orden > 0
                    AND activo=$activo";
        }

        $filter = [];

        $query ='
                  SELECT c.* 
                  FROM criptomonedas AS c
                  WHERE 1=1
                  AND borrado_logico = 0
                  
                 '. $and.'
                 ORDER BY c.activo DESC ,c.orden ASC, nombre ASC'
        ;
        $consulta = $conection->prepare($query);
        $consulta->execute();

        $result = $consulta->fetchAll(PDO::FETCH_ASSOC);
        $conexion = null;

        $params['currencies'] = $result;
        $params['params'] = $filter;

        if($activo){
            return $result;
        }

        return $params;
    }

    public function getCurrencie($id = 0)
    {
        $conection = new Conection();
        $query ="
                  SELECT c.* 
                  FROM criptomonedas AS c
                  WHERE 1=1
                  AND borrado_logico = 0
                  AND id=$id
                "
        ;
        $consulta = $conection->prepare($query);
        $consulta->execute();

        $result = $consulta->fetchAll(PDO::FETCH_ASSOC);
        $conexion = null;

        $params['currencie'] = @$result[0];

        return $params;
    }

    public function save($id=0)
    {
        $nombre     =   isset($_POST['nombre'])? "'".$_POST['nombre']."'" : "NULL";
        $codigo     =   isset($_POST['codigo'])? "'".$_POST['codigo']."'" : "NULL";
        $url_api    =   isset($_POST['url_api'])? "'".$_POST['url_api']."'" : "NULL";
        $imagen_path  = (isset($_POST['imagen_path']) AND strlen($_POST['imagen_path']) >0)? "'".$_POST['imagen_path']."'" : "NULL";
        $orden        = (isset($_POST['orden']) AND $_POST['orden'] > 0 )? $_POST['orden'] : "NULL";
        $venta_porcentaje = (isset($_POST['venta_porcentaje']) AND $_POST['venta_porcentaje'] > 0)? $_POST['venta_porcentaje'] : "NULL";
        $compra_porcentaje = (isset($_POST['compra_porcentaje']) AND $_POST['compra_porcentaje'] > 0)? $_POST['compra_porcentaje'] : "NULL";
        $compra_signo     = (isset($_POST['compra_signo']))? "1" : "0";
        $venta_signo      = (isset($_POST['venta_signo']))?  "1" : "0";
        $activo           = (isset($_POST['activo']))? "1" : "0";

        $conection = new Conection();
        $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result['exito'] = false;

        if($activo == "0"){
            $orden = "NULL";
        }

        try {

            if(isset($id) and $id > 0)
            {
                $currencie = Currencie::getCurrencie($id)['currencie'];
               /* Currencie::ordenar(Currencie::getCurrencie($id));*/
                if(Currencie::validarActivos()['data'] >= 10 AND $activo==1 AND $currencie['activo']==0){
                    //$result['msg'] = 'Para activar una nueva moneda deberas desactivar otra, ya tienes 10 monedas activas!';
                    $result['msg'] = 'Para activar una nueva moneda deberas <b class="orange-text" style="padding: 0px 5px"> desactivar </b> otra, ya tienes <b class="orange-text" style="padding: 0px 5px"> 10 <b> monedas activas!';
                    $result['exito'] = false;
                }else{
                    $sql = "UPDATE criptomonedas 
                        SET nombre=$nombre,
                            codigo=$codigo,
                            orden=$orden,
                            url_api=$url_api,
                            compra_signo=$compra_signo,
                            venta_porcentaje=$venta_porcentaje,
                            venta_signo=$venta_signo,
                            imagen_path=$imagen_path,
                            activo=$activo,
                            compra_porcentaje=$compra_porcentaje
                       WHERE id = $id";
                    $conection->exec($sql);
                    $result['exito'] = true;
                    $result['id'] = (int)$id;
                    $result['msg'] = 'exito!';
                }
            }else{
                if(Currencie::validarActivos()['data'] >= 10 AND $activo == "1"){
                    $result['msg'] = 'Para activar una nueva moneda deberas <b class="orange-text" style="padding: 0px 5px"> desactivar </b> otra, ya tienes <b class="orange-text" style="padding: 0px 5px"> 10 <b> monedas activas!';
                   // $result['msg'] = 'Para agregar una nueva moneda deberas desactivar otra, ya tienes 10 monedas activas!';
                    $result['exito'] = false;
                }else {

                    $sql = "INSERT INTO criptomonedas 
                    (nombre, codigo, orden,url_api,compra_signo,venta_porcentaje,venta_signo,imagen_path,activo,compra_porcentaje)
                    VALUES ($nombre,$codigo,$orden, $url_api, $compra_signo, $venta_porcentaje, $venta_signo ,$imagen_path,$activo,$compra_porcentaje)";
                    // use exec() because no results are returned
                    $conection->exec($sql);
                    $result['id'] = (int)$conection->lastInsertId();
                    $result['exito'] = true;
                    $result['msg'] = 'exito!';
                }
            }

            echo json_encode($result);

        }catch(PDOException $e)
        {
            echo $sql . "<br>" . $e->getMessage();
            echo json_encode($result);
        }

    }

    public function ordenar($currencie)
    {
//TODO ordenar
        $criptomonedas = Currencie::index(1);
        $criptomonedas = $criptomonedas['currencies'];
        $cripto_auxi = $criptomonedas;
        $altero = $currencie['currencie'];

        $ordenamiento = array_column($cripto_auxi,'orden');
        echo "<pre>";
        var_dump($ordenamiento);
        if(!in_array($altero['orden'], $ordenamiento) ){
            array_push($cripto_auxi,$altero);
        }else{
            for ($i=0 ;$i < count($criptomonedas); $i++)
            {
                if($criptomonedas[$i]['orden'] <= $altero['orden']){
                    if($criptomonedas[$i]['orden'] == $altero['orden'] ){
                        $auxi = [
                            'orden' => $cripto_auxi[$i]['orden'],
                            'id' =>  $cripto_auxi[$i]['id']
                        ];

                        $new = 0;
                        foreach ($criptomonedas as $key => $criptomoneda)
                        {
                            ++$new;

                           /* $conection = new Conection();
                            $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                            $auxiOrden=$altero['orden']+$new   ;
                            $auxiId = $cripto_auxi[$i]['id'];
                            $sql = "UPDATE criptomonedas
                                    SET orden = $auxiOrden
                                    WHERE id = $auxiId
                                    ";
                            $conection->exec($sql);*/
                            $cripto_auxi[$i]['orden'] = $altero['orden']+$new;

                            ++$i;

                        }

                        array_push($cripto_auxi,$altero);
                        break;
                    }else{
                        unset($criptomonedas[$i]);
                    }
                }else{

                    array_push($cripto_auxi,$altero);
                }

            }
        }



    }

    function delete($id){

        $conection = new Conection();
        $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = [];
        try{
            $sql = "UPDATE criptomonedas SET borrado_logico=1 WHERE id = $id";
            $conection->exec($sql);

            $result['success']= true;
            $result['msg']='el registro se borro con exito';

            return $result;

        }catch (Exception $e){
            $result['success']= false;
            $result['msg']=$e;

            return $result;
        }


    }

    public function validarActivos(){
        $conection = new Conection();
        $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = [];
        try{
            $sql = "SELECT COUNT(*)  AS c
                    FROM criptomonedas
                    WHERE activo = 1 
                    AND borrado_logico=0";

            $consulta = $conection->prepare($sql);
            $consulta->execute();

            $data = $consulta->fetchAll(PDO::FETCH_ASSOC);

            $result['success']= true;
            $result['data'] = $data[0]['c'];
            return $result;

        }catch (Exception $e){
            $result['success']= false;
            $result['msg']=$e;
            return $result;
        }
    }

    public function criptoCurrencies(){
        $url_api = $_GET['url_api'];
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $url_api,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 100,
            CURLOPT_TIMEOUT => 300,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Cache-Control: no-cache"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            if( $response == "TemporaryRedirect"){
                echo json_encode("error");
            }else{
                echo $response;
            }
        }
    }
}
if(isset($_GET['function']) && !empty($_GET['function'])) {
        $action = $_GET['function'];
        $id = isset($_GET['id'])? (int) $_GET['id']: 0;
        switch($action) {
            case 'save' : Currencie::save($id);
                break;
            case 'criptoCurrencies' : echo Currencie::criptoCurrencies();
                break;
            case 'index' : echo json_encode(Currencie::index(1));
                break;
            case 'delete' : echo json_encode(Currencie::delete($id));
                break;
            case 'validarActivos': echo json_encode(Currencie::validarActivos());
        }

}