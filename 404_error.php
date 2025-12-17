<?php
// Page d'erreur 404

http_response_code(404);

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
    <h1>Erreur 404</h1>
    <p>
        La page ou la ressource demandée n'existe pas.
    </p>
</main>
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php"; ?>
</body>
</html>
