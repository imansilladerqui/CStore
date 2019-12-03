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
$id = (isset($_GET['id']) and $_GET['id']>0)? $_GET['id'] : 0;

$currencies = Currencie::getCurrencie($id);
extract($currencies);
$activo = (isset($currencie['activo']) AND $currencie['activo'] ==1 )? 1 : 0;
?>
<style>
    .switch label .lever:after{
        background-color: #4CAF50;
    }
    .switch label .lever{
        background-color: #a3cbab;
    }
    .switch label input.profile-switch-input[type="checkbox"]:checked + .profile-switch-lever.lever::after {
        background-color: red;
    }
    .switch label input[type=checkbox]:checked+.lever {
        background-color: #ffb0ae;
    }
</style>
<div class="container">
    <div class="row">
        <div class="col s12">
            <div class="card blue-grey darken-2">
                <div class="card-content white-text">
                    <div class="row center">
                        <span class="card-title border-bottom"><b>Alta de currencies</b></span>
                    </div>
                    <div class="row">
                        <form method="post" class="col s12" onsubmit="return save(this);">
                            <div class="row">
                                <div class="input-field col s4 m3">
                                    <input name="nombre" type="text" class="validate" value="<?=isset($currencie['nombre'])?$currencie['nombre']:""?>" required>
                                    <label>Nombre</label>
                                </div>

                                <div class="input-field col s2 m1">
                                    <input name="codigo" type="text"  value="<?=isset($currencie['codigo'])?$currencie['codigo']:""?>">
                                    <label>Codigo</label>
                                </div>

                                <div class="input-field col s12 m7">
                                    <input name="url_api" type="text"  value="<?=isset($currencie['url_api'])?$currencie['url_api']:""?>"  required class="validate">
                                    <label>API url</label>
                                </div>

                                <div class="input-field col s2 m1">
                                    <input name="orden" type="number"  value="<?=isset($currencie['orden'])?$currencie['orden']:""?>" >
                                    <label>Prioridad</label>
                                </div>


                            </div>

                            <div class="row">
                                <div class="col s12 m5">
                                    <div class="switch" style=" display: inline-block;">
                                        <label class="white-text">
                                            <i class="material-icons" style="position: relative;top: 8px;left: 10px;">add</i>
                                            <input class="profile-switch-input" id="compra_signo" name="compra_signo" <?=(isset($currencie['compra_signo']) AND $currencie['compra_signo'])? "checked":""?> type="checkbox">
                                            <span class="profile-switch-lever lever"></span>
                                            <i class="material-icons" style="position: relative;top: 8px;right: 10px;">remove</i>
                                        </label>
                                    </div>
                                    <div class="input-field inline">
                                        <input id="compra_porcentaje" name="compra_porcentaje"  value="<?=isset($currencie['compra_porcentaje'])?$currencie['compra_porcentaje']:""?>" type="number">
                                        <label>Porcentaje de compra</label>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col s12 m5">
                                    <div class="switch" style=" display: inline-block;">
                                        <label class="white-text">
                                            <i class="material-icons" style="position: relative;top: 8px;left: 10px;">add</i>
                                            <input class="profile-switch-input" id="venta_signo" name="venta_signo" <?=(isset($currencie['venta_signo']) AND $currencie['venta_signo'])? "checked":""?>  type="checkbox">
                                            <span class="profile-switch-lever lever"></span>
                                            <i class="material-icons" style="position: relative;top: 8px;right: 10px;">remove</i>
                                        </label>
                                    </div>
                                    <div class="input-field inline">
                                        <input id="venta_porcentaje" name="venta_porcentaje"  value="<?=isset($currencie['venta_porcentaje'])?$currencie['venta_porcentaje']:""?>" type="number">
                                        <label>Porcentaje de venta</label>
                                    </div>
                                </div>
                            </div>
                            <!--<div class="input-field col s2">-->

                           <!-- </div>-->

                            <div class="row">

                                <div class="input-field col s6 ">
                                    <input name="imagen_path"  value="<?=isset($currencie['imagen_path'])?$currencie['imagen_path']:""?>" type="text">
                                    <label>Path de imagen</label>
                                </div>
                                <div class="col s6" style="margin-top: 20px;">
                                    <input id="activo" name="activo"  <?=(isset($currencie['activo']) AND $currencie['activo'] )? "checked" :""?> type="checkbox">
                                    <label class="right white black-text" for="activo">Activo</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="input-field col s8 m4 l3 offset-s4">
                                    <button class="btn waves-effect waves-light center" type="submit">
                                        <i class="material-icons left">save</i><b>Guardar</b>
                                    </button>
                                </div>
                                <?php
                                if(isset($_GET['id']) and $_GET['id']){
                                 ?>
                                    <div class="input-field col s8 m4 l3 right offset-s4">
                                        <span class="btn waves-effect waves-light red lighten-1 center" onclick="eliminar(<?=$_GET['id']?>)">
                                            <i class="material-icons left">delete</i><b>Eliminiar</b>
                                        </span>
                                    </div>
                                <?php
                                }
                                ?>

                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>

<?php
include '../footer.php'
?>
<script type="text/javascript">
    var click = false;
    $(document).ready(function() {
        $.fn.serializeObject = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };

        //validar();
    });
    var save = function save(e){
        //validar();
        console.log('entra al click en :' ,click);
        if (!click) {
            click = true;
            data = $(e).serializeObject();
            console.log(click);
            $.ajax({
                url: "currencie.php?function=save<?=(isset($currencie['id']) and $currencie['id'] > 0) ? "&id=" . $currencie['id'] : ""?>",
                type: "POST",
                data: data,
                success: function (res) {
                    response = JSON.parse(res);
                    console.log(response);
                    if (response.exito) {
                        Materialize.toast('Exito!', 5000);
                        setTimeout(function () {
                            //if(confirm('En buenahora se grabo!')) {
                            <?php
                            if (isset($currencie['id']) and $currencie['id'] > 0){
                            ?>
                            window.location.reload(window.location.href);
                            <?php
                            }else{
                            ?>
                            window.location.href = window.location.href + "?id=" + response.id;
                            <?php
                            }
                            ?>
                            //}
                        }, 500);
                        click = false;
                    } else {
                        click = false;
                        Materialize.toast(response.msg, 150000,'center rounded');

                    }
                },
                error: function (res) {
                    click = false;
                    Materialize.toast('Ops no se guardo!,Verifique la red', 5000)
                }
            })
        }

        return false;
    };
    var eliminar = function eliminar(id){
        if(confirm('esta seguro de eliminar esta criptomoneda?')){
            $.ajax({
                url: "currencie.php?function=delete<?=(isset($currencie['id']) and $currencie['id'] >0)? "&id=".$currencie['id'] : ""?>",
                type: "GET",
                success: function(res){
                    response = JSON.parse(res);
                    if(response.success){
                        Materialize.toast(response.msg, 5000);
                        setTimeout(function(){
                            $('.brand-logo')[0].click()
                        },500);
                        click = false;
                    }else{
                        click = false;
                        Materialize.toast('Ops no se guardo!', 5000)
                    }
                },
                error:function(res) {
                    click = false;
                    Materialize.toast('Ops no se guardo!,Verifique la red', 5000)
                }
            })

        }
    };
    var validar = function validar() {
        var res;
        $.ajax({
            url: "currencie.php?function=validarActivos",
            type: "GET",
            success: function(r){
                response = JSON.parse(r);
                if(response.success) {
                    if (response.data >= 10) {
                        Materialize.toast('Para agregar una nueva moneda deberas <b class="orange-text" style="padding: 0px 5px"> desactivar </b> otra, ya tienes <b class="orange-text" style="padding: 0px 5px"> 10 <b> monedas activas!', 150000,'center rounded');
                        res = true;
                        if(<?=$activo?> >= 1){
                            console.log('entra en true');
                            click = false;
                        }else{
                            console.log('entra en false');
                            if($("#activo:checked").val()=="on"){
                                click = true;
                            }
                            console.log('val click:',click)
                        }
                        //click = true;
                    } else {
                        res = false;
                        click = false;
                    }
                }
                return res
            },
            error:function() {
               // click = true;
                res= false;
                Materialize.toast('Ops no se guardo!,Verifique la red', 5000)
            }
        });
        return res;
    };



</script>