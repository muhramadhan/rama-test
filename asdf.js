var files = <?php $out = array();
foreach (glob("file/*.html") as $filename) {
    $p = pathinfo($filename);
    $out[] = $p["filename"];
}
echo json_encode($out); ?>;
