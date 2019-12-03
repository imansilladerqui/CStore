<?php


$con=mysqli_connect("localhost","sebastian","sebastiancripto","cripto");

if (mysqli_connect_errno())
{
    echo "MYQSL TEST: fallo la conexión MySQL padre: " . mysqli_connect_error()."<br>";
}

//$res_sql_set_gtm = mysqli_query($con,$sql_set_gtm);

$consulta = "
			SELECT * 
			FROM criptomonedas c 
			WHERE 1=1
			AND c.activo = 1
			ORDER BY c.orden ASC;";

if ($resultado = mysqli_query($con, $consulta)) {

    $criptomonedas=[];
    while ($row = mysqli_fetch_assoc($resultado)) {
        $criptomonedas[] = $row;
    }
    $js_criptomonedas = json_encode($criptomonedas);
}
else
{
    echo mysqli_error($con);
}

mysqli_close($con);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>CRYPTOSTORE - Pizarra Digital</title>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

         body {
            margin-left: 0px;
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }

        #videocont {
            position: absolute;
            top: 0px;
            bottom: 0px;
            width: 100%;
            z-index: -2;
        }
        #videocont video {
            /*object-fit: contain;*/
            /*object-fit: fill;*/
            object-fit: cover;
            width:100%;
            height:100%;
        }


        .backcolor {
            position: absolute;
            top: 0px;
            bottom: 0px;
            width: 100%;
            z-index: -1;
            background-color: rgba(22,15,41,0.2);
        }
        .cabezal {
            margin-top: 2.5vw;
            height: 10vw;
            width: 96vh;
            margin-right:4vh;
            background: linear-gradient(to right, rgba(22,15,41,0), rgba(22,15,41,0.9));
            /*background: linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.85),  rgba(22,15,41,0.85), rgba(22,15,41,0.95));*/
        }

        .logo {
            clear: none;
            display: block;
            float: left;
            width: 45vh;
            margin-left: 5vh;
            height: 7vw;
            padding-top: 2vw;
            font-size: 2.2vw;
            opacity:0.6;
            /* [disabled]background-color: #C60; */
        }
        .logoH {
            height: 100%;
        }

        .colA {
            clear: none;
            display: block;
            float: left;
            width: 22vh;
            padding-right: 1vh;
            height: 5vw;
            margin-top: 4vw;
            /* [disabled]background-color: #FC0; */
            font-family: 'Roboto';
            font-weight: 500;
            font-style: normal;
            text-align: center;
            line-height: 8.2vw;
            font-size: 2.7vw;
            color: #FFF;
        }
        .colB {
            clear: none;
            display: block;
            float: left;
            width: 22vh;
            padding-right: 1vh;
            height: 6vw;
            margin-top: 4vw;
            /* [disabled]background-color: #FF6; */
            font-family: 'Roboto';
            font-weight: 500;
            font-style: normal;
            text-align: center;
            line-height: 8.2vw;
            font-size: 2.7vw;
            color: #FFF;
        }

        .moduloA {
            height:8vw;
            margin-top:0.5vw;
            width:96vh;
            margin-right:4vh;
            background: linear-gradient(to right, rgba(33,42,90,0), rgba(33,42,90,0.8), rgba(33,42,90,0.9));
        }
        .moduloB {
            height:8vw;
            margin-top:0.5vw;
            width:96vh;
            margin-right:4vh;
            background: linear-gradient(to right, rgba(22,15,41,0), rgba(22,15,41,0.8), rgba(22,15,41,0.9));
        }

        .col1 {
            clear: none;
            display: block;
            float: left;
            width: 12vh;
            margin-left: 5vh;
            height: 6vw;
            margin-top: 1vw;
            /* [disabled]background-color: #C00; */
            /* [disabled]text-align: right; */
        }
        .col2 {
            clear: none;
            display: block;
            float: left;
            width: 31.5vh;
            margin-left: 1.5vh;
            height: 4vw;
            margin-top: 2vw;
            /* [disabled]background-color: #C60; */
            font-family: 'Roboto';
            font-size: 2.5vw;
            font-weight: 400;
            font-style: normal;
            text-align: left;
            line-height: 4vw;
            color: #FFF;
            overflow: hidden;
        }
        .col3 {
            clear: none;
            display: block;
            float: left;
            width: calc( 22vh - 2px );
            padding-right: 1vh;
            height: 4vw;
            margin-top: 2vw;
            /* [disabled]background-color: #FC0; */
            font-family: 'Roboto';
            font-weight: 500;
            font-style: normal;
            text-align: center;
            line-height: 4vw;
            font-size: 2.7vw;
            color: #FFF;
            border-right-width: 2px;
            border-right-style: solid;
            border-right-color: rgba(53,52,110,0.8);
        }
        .col4 {
            clear: none;
            display: block;
            float: left;
            width: 22vh;
            padding-right: 1vh;
            height: 4vw;
            margin-top: 2vw;
            /* [disabled]background-color: #FF6; */
            font-family: 'Roboto';
            font-weight: 500;
            font-style: normal;
            text-align: center;
            line-height: 4vw;
            font-size: 2.7vw;
            color: #FFF;
        }
		
		
		.rotacion{
        -ms-transform: rotate(90deg); /* IE 9 */
        -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
        transform: rotate(90deg);
      }

    </style>
</head>
<body style="overflow:hidden">

<div id="videocont" class="videoback">
    <video id="video" src="video/back.mp4" type="video/mp4" autoplay loop muted poster="imgs/pizarra.jpg"> </video>
</div>

<div class="backcolor">
</div>
<div class="rotacion">
<div class="cabezal">
    <div class="logo"><img src="imgs/crypto-logo.svg" class="logoH" /></div>
    <div class="colA">COMPRA</div>
    <div class="colB">VENTA</div>
</div>

<div id="body">
</div>
</div>

<script type="text/javascript" src="panel/assets/js/jquery-3.3.1.slim.min.js" ></script>
<script type="text/javascript" defer>

    $(window).on('load',function(){
       // var criptomonedas = <?/*=$js_criptomonedas*/?>;

        var criptoMonedas = function critoMonedas() {
            var result;
             $.ajax(
                'panel/currencies/currencie.php?function=index',
                {   async: false,
                    cache: false,
                    success: function(request) {
                        request = JSON.parse(request);
                        result = request;
                    },
                    error: function() {
                        console.log('error en consulta de monedas ') ;
                    }
                }
            );
             return result;
        };

        var calcPrecio = function calcPrecio(precio,signo,porcentaje){
            console.log(signo);
            if(signo==1){ //negativo
                return (precio - (precio*porcentaje/100))
            }else{
                return (precio + (precio*porcentaje/100))
            }
        };

        var jqueryCrito = function jqueryCrito(){
            $.each( criptoMonedas() , function( index, criptomoneda ) {
                var classCriptomoneda;
                var i = index+1;
                var impar = i%2;

                if (impar)
                    classCriptomoneda = 'moduloA';
                else
                    classCriptomoneda = 'moduloB';

                $.ajax(
                    "panel/currencies/currencie.php?function=criptoCurrencies",
                    {
                        data:{"url_api":criptomoneda.url_api},
                        async: false,
                        cache: false,
                        method:"GET",
                        success: function(request) {
                            request = JSON.parse(request);
                            console.log(request)

                            var precio = Number(request.USD);
                            var venta = calcPrecio(precio,criptomoneda.venta_signo,criptomoneda.venta_porcentaje).toFixed(2);
                            var compra = calcPrecio(precio,criptomoneda.compra_signo,criptomoneda.compra_porcentaje).toFixed(2);
                            html =
                                '<div id="'+criptomoneda.orden+'">'+
                                '<div id="'+criptomoneda.codigo+'" class="'+classCriptomoneda+'">' +
                                '<div class="col1"><img src="'+criptomoneda.imagen_path+'" class="logoH" /></div>' +
                                '<div class="col2">'+criptomoneda.nombre+'</div>' +
                                '<div class="col3 compra">'+compra+'</div>' +
                                '<div class="col4 venta">'+venta+'</div>' +
                                '</div>' +
                                '</div>';
                            $('#body').append(html);

                         /*   if( request != "error"){
                                var html;
                                if(request.success){
                                    var precio = Number(request.ticker.price);
                                    var venta = calcPrecio(precio,criptomoneda.venta_signo,criptomoneda.venta_porcentaje).toFixed(2);
                                    var compra = calcPrecio(precio,criptomoneda.compra_signo,criptomoneda.compra_porcentaje).toFixed(2);
                                    html =
                                        '<div id="'+criptomoneda.orden+'">'+
                                        '<div id="'+criptomoneda.codigo+'" class="'+classCriptomoneda+'">' +
                                        '<div class="col1"><img src="'+criptomoneda.imagen_path+'" class="logoH" /></div>' +
                                        '<div class="col2">'+criptomoneda.nombre+'</div>' +
                                        '<div class="col3 compra">'+compra+'</div>' +
                                        '<div class="col4 venta">'+venta+'</div>' +
                                        '</div>' +
                                        '</div>';
                                    $('#body').append(html);
                                }
                            }*/
                        },
                        error: function() {
                            console.log('error');
                        }
                    }
                );
            });
        };

        var refreshJqueryCrito = function refreshJqueryCrito(){
            $.each(criptoMonedas() , function( index, criptomoneda ) {
               // setTimeout(function(){
                        $.ajax(
                            "panel/currencies/currencie.php?function=criptoCurrencies",
                            {
                                async: false,
                                cache:false,
                                data:{"url_api":criptomoneda.url_api},
                                success: function(request) {
                                    var html;
                                    var request = JSON.parse(request);
                                    var cripto = $("#"+criptomoneda.codigo);
                                    var precio = Number(request.USD);

                                        var venta = cripto.find('.venta');
                                        var compra = cripto.find('.compra');
                                        venta.html(calcPrecio(precio,criptomoneda.venta_signo,criptomoneda.venta_porcentaje).toFixed(2));
                                        compra.html(calcPrecio(precio,criptomoneda.compra_signo,criptomoneda.compra_porcentaje).toFixed(2));

                                    /*if(request != "error"){
                                        if(request.success){
                                            var precio = Number(request.ticker.price);
                                            if(cripto.find(".compra").text()){
                                                    var venta = cripto.find('.compra');
                                                    var compra = cripto.find('.venta');
                                                    venta.html(calcPrecio(precio,criptomoneda.venta_signo,criptomoneda.venta_porcentaje).toFixed(2));
                                                    compra.html(calcPrecio(precio,criptomoneda.compra_signo,criptomoneda.compra_porcentaje).toFixed(2));

                                            }else{
                                                var classCriptomoneda;
                                                var i = index+1;
                                                var impar = i%2;

                                                if (impar)
                                                    classCriptomoneda = 'moduloA';
                                                else
                                                    classCriptomoneda = 'moduloB';


                                                var venta = calcPrecio(precio,criptomoneda.signo,criptomoneda.venta_porcentaje).toFixed(2);
                                                var compra = calcPrecio(precio,criptomoneda.signo,criptomoneda.compra_porcentaje).toFixed(2);
                                                html =
                                                    '<div id="'+criptomoneda.orden+'">' +
                                                    '<div id="'+criptomoneda.codigo+'" class="'+classCriptomoneda+'">' +
                                                    '<div class="col1"><img src="'+criptomoneda.imagen_path+'" class="logoH" /></div>' +
                                                    '<div class="col2">'+criptomoneda.nombre+'</div>' +
                                                    '<div class="col3 compra">'+compra+'</div>' +
                                                    '<div class="col4 venta">'+venta+'</div>' +
                                                    '</div>' +
                                                    '</div>';
                                                $('#body').append(html);


                                            }
                                        }
                                    }*/
                                },
                                error: function() {
                                    console.log('error');
                                }
                            }
                        );
                   /* }
                    , timeOut);
                timeOut = timeOut + 5000;*/

            });
        };

        jqueryCrito();
        setInterval(function () {
            refreshJqueryCrito();

            var main = document.getElementById( 'body' );

            [].map.call( main.children, Object ).sort( function ( a, b ) {
                return +a.id.match( /\d+/ ) - +b.id.match( /\d+/ );
            }).forEach( function ( elem ) {
                main.appendChild( elem );
            });

        },30000);
    });

   /* $.ajax(
        "https://api.cryptonator.com/api/ticker/zec-usd",
        {
            async: false,
            crossDomain: true,
            headers: {
                "Cache-Control": "no-cache"
            },
            success: function(request) {
                console.log(request)
            },
            error: function() {
                console.log('error');
            }
        }*/

</script>
</body>
</html>
