<?php
// Page d'accueil - /

session_start();

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/metadata.php"; ?>
    <title>Accueil | NSI</title>
</head>
<body>
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>
<main>
    <h1>Un titre</h1>
    <p>
        Un paragraphe
    </p>
    <img src="alien.jpg" alt="Alien">
</main>
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php"; ?>
</body>
</html>
