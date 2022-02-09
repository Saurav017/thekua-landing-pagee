<?php 
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
  
    $project = !empty($_POST['project'])? $_POST['project']: "" ;
    $job = !empty($_POST['job'])? $_POST['job']: "" ;
    $other = !empty($_POST['others'])? $_POST['others']: "" ;

    $to_email = "sauravp017@gmail.com";
    $subject = "Your Deatils";
    $body = "Name = " .  $name  . ", <br> Email =" . $email . " <br> Phone =" . $phone . "<br> Your Choice = " . $project . ", " . $other  . ", " . $job ;
    $headers = "From:merndevelopersp007@gmail.com";

    // echo $body;
    // exit();

    if (mail($to_email, $subject, $body, $headers)) {
        echo "Email successfully sent to $to_email...";
    } else {
        echo "Email sending failed...";
    }
}
?>