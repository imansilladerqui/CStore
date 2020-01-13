
var clic = 1;
function menu(){ 
   if(clic==1){
   document.getElementById("seccion-menu-cont-cel").style.height = "220px";
   document.getElementById("seccion-menu-cont-cel").style.paddingTop = "15px";
	   document.getElementById("seccion-menu-cont-cel").style.paddingBottom = "15px";
	   document.getElementById("seccion-menu-cont-cel").style.marginBottom = "35px";
   clic = clic + 1;
   } else{
       document.getElementById("seccion-menu-cont-cel").style.height = "0px";
	   document.getElementById("seccion-menu-cont-cel").style.paddingTop = "0px";
	   document.getElementById("seccion-menu-cont-cel").style.paddingBottom = "0px";
	   document.getElementById("seccion-menu-cont-cel").style.marginBottom = "0px";
	clic = 1;
   }   
}



function popPage2(a,b,c,d){   
document.getElementById(a).style.display = "block";
document.getElementById(a).style.opacity = "1";
document.getElementById(b).style.display = "none";
document.getElementById(b).style.opacity = "0";
document.getElementById(c).style.borderColor="#900";
document.getElementById(d).style.borderColor="#fff";
   }




function popPage3(a,b,c,d,e,f){   
document.getElementById(a).style.display = "block";
document.getElementById(a).style.opacity = "1";
document.getElementById(b).style.display = "none";
document.getElementById(b).style.opacity = "0";
document.getElementById(c).style.display = "none";
document.getElementById(c).style.opacity = "0";
document.getElementById(d).style.borderColor="#900";
document.getElementById(e).style.borderColor="#fff";
document.getElementById(f).style.borderColor="#fff";
   }
   
function popPage4(a,b,c,d,e,f,g,h){   
document.getElementById(a).style.display = "block";
document.getElementById(a).style.opacity = "1";
document.getElementById(b).style.display = "none";
document.getElementById(b).style.opacity = "0";
document.getElementById(c).style.display = "none";
document.getElementById(c).style.opacity = "0";
document.getElementById(d).style.display = "none";
document.getElementById(d).style.opacity = "0";
document.getElementById(e).style.borderColor="#900";
document.getElementById(f).style.borderColor="#fff";
document.getElementById(g).style.borderColor="#fff";
document.getElementById(h).style.borderColor="#fff";
   }     




function popUp(a){ 
   document.getElementById(a).style.visibility = "visible";
   document.getElementById(a).style.opacity = "1";
   
   document.getElementById(a).style.top = "50px";
   /*document.getElementById(a).style.bottom = "50px";*/
   }
   
   
   
function popClose(a){ 
   document.getElementById(a).style.visibility = "hidden";
   document.getElementById(a).style.opacity = "0";
   
   document.getElementById(a).style.top = "100px";
   /*document.getElementById(a).style.bottom = "0px";*/
   }
   
   
   
function popPrev(a,b){ 
   document.getElementById(a).style.visibility = "hidden";
   document.getElementById(a).style.opacity = "0";
   
   document.getElementById(a).style.top = "100px";
   /*document.getElementById(a).style.bottom = "0px";*/
   document.getElementById(b).style.visibility = "visible";
   document.getElementById(b).style.opacity = "1";
   
   document.getElementById(b).style.top = "50px";
   /*document.getElementById(b).style.bottom = "50px";*/
   }
   
   
   
function popNext(a,b){ 
   document.getElementById(a).style.visibility = "hidden";
   document.getElementById(a).style.opacity = "0";
   
   document.getElementById(a).style.top = "0px";
   /*document.getElementById(a).style.bottom = "100px"*/;
   document.getElementById(b).style.visibility = "visible";
   document.getElementById(b).style.opacity = "1";
   
   document.getElementById(b).style.top = "50px";
   /*document.getElementById(b).style.bottom = "50px";*/
   }




//Nombramos la función
function valida_envia(){

//Definimos los caracteres permitidos en una dirección de correo electrónico
var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;


//Validamos mail
if ((regexp.test(document.form.mail.value) == 0) || (document.form.mail.value.length = 0)){
alert("Complete EMAIL");
document.form.mail.focus();
return 0;
} else {
var c_mail=true;
}


//Validamos un campo de texto como numérico, por ejemplo el campo teléfono de 9 dígitos
/*valor = document.form.phone.value;
if( !(/^\d{9}$/.test(valor)) ) {
alert("Tiene que escribir un teléfono de 9 dígitos");
document.form.phone.focus();
return 0;
}*/


//Validamos name
if (document.form.nombre.value.length==0){
alert("Complete Nombre");
document.form.nombre.focus();
return 0;
}



//Validamos phone
if (document.form.tel.value.length==0){
alert("Complete Teléfono");
document.form.tel.focus();
return 0;
}

//Validamos mensaje
if (document.form.mensaje.value.length==0){
alert("Complete Mensaje");
document.form.mensaje.focus();
return 0;
}


//Si todos los campos han validado correctamente, se envía el formulario
document.form.submit();
}

//Cerramos el Script




