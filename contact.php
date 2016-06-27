<?php

$name = isset($_POST['nom']) ? $_POST['nom'] : NULL;
$email = isset($_POST['mail']) ? $_POST['mail'] : NULL;
$message = isset($_POST['message']) ? $_POST['message'] : NULL;

$to = 'corentin.langlait@gmail.com';
$subject = "From: $name\n E-mail: $email\n";

if ($name && $email && $message)
if ($_POST['submit']) {
if (mail ($to, $subject, $message)) {
  echo '<p>Votre message a bien été envoyé</p>';
} else {
  echo '<p>Quelque chose n\'a pas fonctionné correctement, veuillez recommencer</p>';
}
}
