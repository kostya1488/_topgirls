<?php
$to = "info@topgirls.kiev.ua";
$subject = "Анкета с сайта";
$headers = "From: message@topgirls.kiev.ua";

if (

isset($_POST["name"]) && 
isset($_POST["age"]) && 
isset($_POST["height"]) && 
isset($_POST["weight"]) && 
isset($_POST["tel"])

) { 

    // Формируем массив для JSON ответа
    $result = array(
    	'Имя' => $_POST["name"],
        'Возраст' => $_POST["age"],
        'Рост' => $_POST["height"],
        'Вес' => $_POST["weight"],
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