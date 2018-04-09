<?php 
    error_reporting(E_ALL | E_STRICT);
    ini_set("display_errors", "on");

    $method = $_SERVER['REQUEST_METHOD'];
    $data = "";

    function getTemplateItems() {
        $con = mysqli_connect("localhost", "lijun", "li999888");
        if (!$con) {
            echo 'could not connect db: ';
        }
        mysqli_select_db($con, "wxregards");
        $result = mysqli_query($con, "SELECT * FROM templates");
        $result_array = array();

        if ($result) {
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $result_array[] = $row;
            }
            echo json_encode($result_array);
            $result->close();
        }

        mysqli_close($con);
    }

    if ($method == 'GET') {
        $data = $_SERVER['QUERY_STRING'];
    }
    $function = $_GET['method'];

    if ($function == "getTemplateItems") {
        getTemplateItems();
    }
?>
