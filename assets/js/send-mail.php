<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['textArea']);
    
    $to = "bhargavi.marni@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Email successfully sent.";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>
