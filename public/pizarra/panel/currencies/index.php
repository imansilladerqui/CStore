<?php
/**
 * Created by PhpStorm.
 * User: laupaj
 * Date: 21/02/2018
 * Time: 02:34 PM
 */
include '../encabezado.php';
include 'currencie.php';
/*include 'legajo.php';
$params = legajo::index();*/
$currencies = Currencie::index();
extract($currencies);
/*echo '<pre>';
var_dump($currencies);
exit*/
?>
<div class="container">
    <div class="row">
        <div class="col s12">
            <div class="card blue-grey darken-2">
                <div class="card-content white-text">
                    <div class="row center">
                        <span class="card-title border-bottom"><b>Listado de currencies</b></span>
                    </div>

                    <div class="row">
                        <a class="waves-effect waves-light btn orange " href="alta.php"><i class="material-icons left">queue</i>Agregar</a>
                        <a class="right" href="https://min-api.cryptocompare.com" target="_blank">Buscar coins aquí</a>
                    </div>
                    <p class="right-align">
                        Se encontraron <span class="orange-text text-lighten-1"><?=count($currencies)?></span> resultados
                    </p>
                    <p class="right-align">
                        <?php
                        $activos = array_filter(
                                        array_column($currencies,'activo'), function($v, $k) {
                                            return $k == 'activo' || $v == 1;
                                        },
                                ARRAY_FILTER_USE_BOTH);
                        ?>
                        <span class="orange-text text-lighten-1"><?=count($activos)?></span> Monedas activas
                    </p>
                    <?php
                    if(count($activos)>9) {
                    ?>
                        <p class="center-align">
                            <span class="orange-text text-lighten-1"> Para activar una moneda deberas desactivar otra.(Solo puedes tener <b>10</b> monedas activas)  </span>
                        </p>
                    <?php
                    }
                    ?>
                    <table class="table bordered">
                        <thead style="border-color: #ff9800;">
                        <tr>
                            <th class="center">Prioridad</th>
                            <th>Nombre</th>
                            <th class="center">Codigo</th>
                            <th class="center">Activo</th>
                        </tr>
                        </thead>

                        <tbody>
                        <?php

                        foreach ($currencies as $currencie)
                        {

                            if($currencie["orden"]%2){
                                $style = 'background-color:rgba(0, 0, 0, 0.05)';
                            }else{
                                $style = '';
                            }
                        $activo = (isset($currencie['activo']) AND $currencie['activo'] == 1 )? "<i class=\"material-icons \">check_box</i>" : "<i class=\"material-icons \">check_box_outline_blank</i>";
                        echo '
                            <tr style="'.$style.'">
                                <td class="center">'.$currencie["orden"].'</td>                                                        
                                <td><a class="orange-text text-lighten-1" href="alta.php?id='.$currencie['id'].'">'.$currencie["nombre"].'</a></td>
                                <td class="center">'.$currencie["codigo"].'</td>
                                <td class="center">'.$activo.'</td>    
                            </tr>
                            ';
                        }
                        ?>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</div>

<?php
include '../footer.php'
?>
<script type="text/javascript">
    $(document).ready(function() {
        $('.modal').modal({
                dismissible: false, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%', // Ending top style attribute
                ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.

                },
                complete: function(modal, trigger) {

                } // Callback for Modal close
            }
        );
    });
</script>