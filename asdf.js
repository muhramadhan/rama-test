var files = <?php $out = array();
foreach (glob("*.*") as $filename) {
    $p = pathinfo($filename);
    $out[] = $p["filename"];
}
echo json_encode($out); ?>;
alert(files);
