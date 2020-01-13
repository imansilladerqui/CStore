<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
<TITLE>CRYPTO WEB</TITLE>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<META NAME="Generator" CONTENT="Mart�n Oliveda">
<META NAME="Author" CONTENT="Martin Oliveda">

</HEAD>

<BODY onLoad="cerrarventana()">


<?php

/*if (!$HTTP_POST_VARS){ */
    $cuerpo = "Formulario CRYPTO WEB\n";
	$cuerpo .= "---------------\n";
	$cuerpo .= "Name: " .$_POST["name"]. "\n";
	$cuerpo .= "Mail: " .$_POST["mail"]. "\n";
	$cuerpo .= "Telefono: " .$_POST["tel"]. "\n";
	$cuerpo .= "Mensaje: " .$_POST["mensaje"]. "\n";
	
	
	
	
	mail("undomac@msn.com","CRYPTO WEB",utf8_decode($cuerpo));
	

echo"<table border=0 width=100%><tr><td align=center><p><font color=#ff6600>Gracias por contactarse!</br><br>
Su consulta está siendo procesada y un miembro de nuestro equipo se contactará dentro de las próximas 24 horas.</font></p></td></tr></table>";


/*}*/
?>

<script language="JavaScript"> 
function cerrarventana(){
	window.setTimeout("document.location.href='http://www.cryptostore.com.ar'",4000) 
/*window.setTimeout("window.close()",500)*/
} 
</script> 

</BODY>
</HTML>
