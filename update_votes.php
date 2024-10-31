<?php
header('Content-Type: application/json');

// Włącz raportowanie błędów
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Odczytujemy dane z JSON
$data = json_decode(file_get_contents('votes.json'), true);

// Sprawdzamy, czy dane zostały poprawnie odczytane
if ($data === null) {
    echo json_encode(['success' => false, 'message' => 'Błąd w odczycie votes.json']);
    exit;
}

// Zwiększamy głos dla wybranego kandydata
$candidate = $_POST['candidate'];
if (array_key_exists($candidate, $data)) {
    $data[$candidate]++;
} else {
    echo json_encode(['success' => false, 'message' => 'Nieznany kandydat']);
    exit;
}

// Zapisujemy zaktualizowane dane do pliku
if (file_put_contents('votes.json', json_encode($data)) === false) {
    echo json_encode(['success' => false, 'message' => 'Błąd w zapisie do votes.json']);
    exit;
}

// Zwracamy odpowiedź
echo json_encode(['success' => true]);
?>
