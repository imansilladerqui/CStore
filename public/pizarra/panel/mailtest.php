<?php
// check for form submission - if it doesn't exist then send back to contact form
/*if (!isset($_POST['save']) || $_POST['save'] != 'contacto') {
    header('Location: contacto.php');
    exit;
}*/
// get the posted data
$name = $_POST['contact_name'];
$email_address = $_POST['contact_email'];
$contact_comentario = $_POST['contact_comentario'];
$contact_tipo_evento = $_POST['contact_tipo_evento'];
$contact_telefono = $_POST['contact_telefono'];
// check that a name was entered
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= "From: Nicolas Vega <vega.nico@gmail.com >"."\r\n";
$headers .= "Reply-To: vega.nico@gmail.com \r\n";
$headers .= "X-Mailer: PHP/" . phpversion();
//$headers .= "Reply-To: $email_address\r\n";
// write the email content
$email_content  = "Enviamos ";


// send the email
//ENTER YOUR INFORMATION BELOW FOR THE FORM TO WORK!
if(mail('jairo.laupa@gmail.com','Aumento de sueldo', $email_content, $headers)) {
    /*echo 'mensaje desde el site'.$email_content. $headers;*/
    // send the user back to the form
    $ok_message = 'Gracias por contactarte.';
    /*header('Location: contacto.php?e='.urlencode($ok_message));*/
    echo $ok_message;
}else{
    echo $ok_message='Intentelo de nuevo por favor';
}/*exit;*/
?>