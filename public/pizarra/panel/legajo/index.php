
<?php
/**
 * Created by PhpStorm.
 * User: laupaj
 * Date: 21/02/2018
 * Time: 02:34 PM
 */
include '../encabezado.php';
include '../cargo/cargo.php';
include 'legajo.php';
$params = legajo::index();
$cargos = Cargo::index();
extract($params);
/*echo '<pre>';
var_dump(count($per));
exit*/
?>
<div class="container">
    <div class="row">
        <div class="col s12">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title border-bottom"><b>Legajos</b></span>
                    <div class="row">
                        <form method="post" class="col s12" action="">
                            <div class="input-field col s3">
                                <select name="cargo">
                                    <option value="todos" disabled <?php if (!isset ($params['CARGO'])){?> selected <?php } ?> >-- Todos --</option>
                                    <?php
                                    foreach ($cargos as $cargo)
                                    {
                                        ?>
                                        <option value="<?=$cargo['CARGO']?>" <?php if (isset ($params['CARGO']) and $params['CARGO'] == $cargo['CARGO'] ){?> selected <?php } ?> > <?=$cargo['CARGO']?></option>
                                        <?php
                                    }
                                    ?>
                                </select>
                                <label>Selecione un cargo</label>
                            </div>



                            <div class="input-field col s3">
                                <button class="btn  btn-floating waves-effect waves-light" type="submit">
                                    <i class="material-icons right">send</i>
                                </button>
                            </div>


                        </form>
                    </div>
                    <p>
                        Se encontraron <?=count($personales)?> resultados
                    </p>
                    <table>
                        <thead>
                        <tr>
                            <th>Legajo</th>
                            <th>Personal</th>
                            <th>Cargo</th>
                        </tr>
                        </thead>

                        <tbody>
                        <?php

                        foreach ($personales as $personal)
                        {
                        echo '
                            <tr>
                                <td>'.$personal["LEGAJO"].'</td>
                                <td>'.$personal["NOMBRE"].'</td>
                                <td>'.$personal["CARGO"].'</td>
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
        $('select').material_select();
    });
</script>