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

    function getTemplateContentImageUrls($name_id) {
        global $database;
        dataBaseConnectAndInit();
        $sql_get_background = "SELECT `background_image_url` FROM `template_content` WHERE `name_id` = '$name_id'";
        $sql_get_image_urls = "SELECT `image_url` FROM `image_urls` WHERE `own_by_template`='$name_id'";
        $result = $database->query($sql_get_background);
        $result_image_urls = $database->query($sql_get_image_urls);
        $result_array = array();
        $result_image_urls_array = array();
        if ($result) {
            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $result_array[] = $row;
            }
            $result->close();
        } else {
            echo "query result null";
        }
        if ($result_image_urls) {
            while($row = $result_image_urls->fetch_array(MYSQLI_ASSOC)) {
                $result_image_urls_array[] = $row;
            }
            $result_image_urls->close();
        } else {
            echo "query image urls null";
        }
        echo json_encode(array_merge($result_image_urls_array, $result_array));
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
    if($function == "getTemplateContentImageUrls") {
        $name_id = $_GET['name_id'];
        getTemplateContentImageUrls($name_id);
    }
?>
