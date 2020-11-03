<?php
    require 'config.php';
    
    $account = $_POST['account'];
    $password = $_POST['password'];
    $auth = $_POST['auth'];
    $ctime = date("Y-m-d H:i:s",time());

    mysql_query("INSERT INTO easyui_admin (account,password,auth,ctime) VALUES ('$account','$password','$auth','$ctime')") or die('SQL 错误！');

    echo mysql_affected_rows();
    
    mysql_close();
?>