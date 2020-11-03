<?php
    
    session_start();

    require 'config.php';

    $account = $_POST['account'];
    $password = $_POST['password'];

    $query = mysql_query("SELECT id FROM easyui_admin WHERE account='$account' AND password='$password' LIMIT 1") or die('SQL错误');

    if(!!mysql_fetch_array($query,MYSQL_ASSOC)){
        $_SESSION['admin'] = $account;
        echo 1;
    }else{
        echo 0;
    }

?>