<?php

$message = "";
foreach ($_GET as $key=>$value){
  
  if($key!='_to' && $key!='_subject'){
    $message.= '<strong>'.$key.':</strong> ';
    $message.= $value."<br>";
  }
  $$key = $value;
}


echo $message;

           
  function mail_utf8($to, $subject = '(No subject)', $message = '', $header = '') {
    $header_ = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=UTF-8' . "\r\n";
    if(mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $header_ . $header)){
      return 1;
    } else {
      return 0;
    };
  }

  echo  mail_utf8($_to, $_subject, $message);
 

?>