<?php

require_once $_SERVER['DOCUMENT_ROOT'] . "/includes/load_env.php";

class SqlRequest {
    // Constructeur statique
    public static function new(string $sqlScript): SqlRequest {
        return new SqlRequest($sqlScript);
    }

    // Attributs
    private PDO $pdo;
    private string $sqlScript;

    // Constructeur
    public function __construct(string $sqlScript) {
        $sqlHost = getenv("SQL_HOST");
        $sqlPort = getenv("SQL_PORT");
        $sqlDatabase = getenv("SQL_DATABASE");
        $sqlUser = getenv("SQL_USER");
        $sqlPassword = getenv("SQL_PASSWORD");

        try {
            $this->pdo = new PDO(
                "mysql:host=" . $sqlHost . ";port=" . $sqlPort . ";dbname=" . $sqlDatabase,
                $sqlUser,
                $sqlPassword
            );
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->query('SET NAMES UTF8MB4'); // UTF8mb4 : Pour pouvoir encoder des émojis
        } catch (Exception $exception) {
            //Message::add($exception->getMessage());
        }
        $this->sqlScript = $sqlScript;
    }

    // Méthodes
    public function execute(array $variables = array(), int $max = 0): array {
        $prepare = $this->pdo->prepare($this->sqlScript . ($max != 0 ? " LIMIT $max" : ""));

        try {
            foreach ($variables as $index => $variable) {
                if (is_bool($variable)) $type = PDO::PARAM_BOOL;
                elseif (is_int($variable)) $type = PDO::PARAM_INT;
                elseif (is_null($variable)) $type = PDO::PARAM_NULL;
                else $type = PDO::PARAM_STR;

                $prepare->bindValue($index + 1, $variable, $type);
            }

            $prepare->execute();

            $results = array();
            foreach ($prepare->fetchAll() as $index => $item) {
                $item["count"] = $index;
                $results[] = (object) $item;
            }
        } catch (Exception $exception) {
            //Message::add($exception->getMessage());
            $results = array();
        } finally {
            $prepare->closeCursor();
        }

        return $results;
    }
}