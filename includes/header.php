<header>
    <a href="/"><img src="/files/logo.png" alt="TCO"></a>
    <h1 class="short-title"><a href="/">NSI</a></h1>
    <h1 class="long-title"><a href="/">NSI — Lycée Blaise Pascal</a></h1>
    <div class="space"></div>
    <div class="burger" onclick="toggle_nav();">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <?php if(isset($_SESSION["adh"])): ?>
    <div class="long-user">
        <a class="avatar" href="/adherent"><img class="icon white user" alt="icon"></a>
        <div class="long-user-menu">
            <p><?= $_SESSION["adh"]->prenom ?> <?= $_SESSION["adh"]->nom ?></p>
            <a href="/deconnexion"><img class="icon white key" alt="icon"><p>Déconnexion</p></a>
        </div>
    </div>
    <?php else: ?>
    <a class="long-connect" href="/connexion"><img class="icon white key" alt="icon"><p>Connexion</p></a>
    <?php endif; ?>
    <div id="curtain" onclick="quit_nav();"></div>
    <nav class="small-nav" id="navigation">
        <h1>Tutorat des Carabins d'Orléans</h1>
        <div class="user">
            <?php if(isset($_SESSION["adh"])): ?>
                <p><?= $_SESSION["adh"]->prenom ?> <?= $_SESSION["adh"]->nom ?></p>
                <a class="red" href="/deconnexion"><img class="icon white key" alt="icon">Déconnexion</a>
            <?php else: ?>
                <a class="green" href="/connexion"><img class="icon white key" alt="icon">Se connecter</a>
            <?php endif; ?>
        </div>
        <a href="/">Accueil</a>
        <a href="/qcm"><?php if(isset($_SESSION["adh"])): ?><img class="icon green unlock" alt="icon"><?php else: ?><img class="icon red lock" alt="icon"><?php endif ?>QCM</a>
        <?php if(isset($_SESSION["adh"]) && $_SESSION["adh"]->referent): ?><a href="/qcm/gestion.php"><img class="icon green unlock" alt="icon">Gestion des QCM</a><?php endif ?>
        <?php if(isset($_SESSION["adh"]) && $_SESSION["adh"]->bureau): ?><a href="/membres"><img class="icon green unlock" alt="icon">Gestion des membres</a><?php endif ?>
        <a href="/drive"><img class="icon white external" alt="icon">Drive</a>
        <a href="/forum"><img class="icon white external" alt="icon">Forum</a>
    </nav>
</header>
<nav class="big-nav" id="navigation">
    <a href="/">Accueil</a>
    <a href="/qcm"><?php if(isset($_SESSION["adh"])): ?><img class="icon green unlock" alt="icon"><?php else: ?><img class="icon red lock" alt="icon"><?php endif ?>QCM</a>
    <?php if(isset($_SESSION["adh"]) && $_SESSION["adh"]->referent): ?><a href="/qcm/gestion.php"><img class="icon green unlock" alt="icon">Gestion des QCM</a><?php endif ?>
    <?php if(isset($_SESSION["adh"]) && $_SESSION["adh"]->bureau): ?><a href="/membres/"><img class="icon green unlock" alt="icon">Gestion des membres</a><?php endif ?>
    <a href="/drive"><img class="icon white external" alt="icon">Drive</a>
    <a href="/forum"><img class="icon white external" alt="icon">Forum</a>
</nav>
