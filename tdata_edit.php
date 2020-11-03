<?php
    require 'config.php';
    
    $id = $_POST['id'];
    $account = $_POST['account'];
    $password = $_POST['password'];
    $auth = $_POST['auth'];
    
    mysql_query("UPDATE easyui_admin SET account='$account',password='$password',auth='$auth' WHERE id='$id'") or die('SQL 错误！');

    echo mysql_affected_rows();
    
    mysql_close();
?>