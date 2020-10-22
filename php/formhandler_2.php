<?php
$to = "info@topgirls.kiev.ua";
$subject = "Обратный звонок";
$headers = "From: message@topgirls.kiev.ua";

if (

isset($_POST["name"]) && 
isset($_POST["tel"])

) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'Имя' => $_POST["name"],     
    	'Телефон' => $_POST["tel"]        
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 

    foreach ($result as $key => $value) {
        $txt_for_mail .= $key . ": " . $value ."\n";
 }

  mail($to, $subject, $txt_for_mail, $headers);

}

?>