<?php

// Si la variable d'environnement FROM_FILE est absente, c'est qu'on a besoin de charger depuis le fichier.
if (getenv("FROM_FILE") === false || getenv("FROM_FILE") == 1) {
    foreach (parse_ini_file($_SERVER['DOCUMENT_ROOT'] . "/../.env") as $name => $value) {
        putenv("$name=$value");
    }
} else {
    putenv("FROM_FILE=0");
}
