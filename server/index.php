<?php 
    error_reporting(E_ALL | E_STRICT);
    ini_set("display_errors", "on");

    $method = $_SERVER['REQUEST_METHOD'];
    $data = "";
    $database = null;

    function dataBaseConnectAndInit() {
        global $database;
        $database = mysqli_connect("localhost", "lijun", "li999888");
        if (!$database) {
            echo "could not connect db: ";
        }
        $database->set_charset("utf8");
        $database->select_db("wxregards");
    }

    function closeDataBase() {
        global $database;
        if ($database) {
            $database->close();
        }
    }

    function getTemplateItemsOrderByAgreeses() {
        global $database;
        dataBaseConnectAndInit();
        $sql = "SELECT * FROM `templates` \n"
            . "ORDER BY `templates`.`agreeses` ASC";
        $result = $database->query($sql);
        $result_array = array();

        if ($result) {
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $result_array[] = $row;
            }
            echo json_encode($result_array);
            $result->close();
        }
        closeDataBase();
    }

    function getTemplateItemsOrderByDate() {
        global $database;
        dataBaseConnectAndInit();
        $sql = "SELECT * FROM `templates` \n"
            . "ORDER BY `templates`.`added_date` DESC";
        $result = $database->query($sql);
        $result_array = array();
        if ($result) {
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $result_array[] = $row;
            }
            echo json_encode($result_array);
            $result->close();
        }
        closeDataBase();
    }

    if ($method == 'GET') {
        $data = $_SERVER['QUERY_STRING'];
    }
    $function = $_GET['method'];

    if ($function == "getTemplateItemsOrderByAgreeses") {
        getTemplateItemsOrderByAgreeses();
    }
    if ($function == "getTemplateItemsOrderByDate") {
        getTemplateItemsOrderByDate();
    }
?>
