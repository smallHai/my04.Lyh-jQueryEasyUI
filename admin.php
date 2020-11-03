<?php

    session_start();
    if(!isset($_SESSION['admin'])){
        header('location:index.html');
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>管理页</title>
    <link rel="stylesheet" type="text/css" href="css/admin.css">
    <link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="easyui/themes/icon.css">
</head>
<body class="easyui-layout">
    
    <div data-options="region:'north',title:'北-无',split:true,noheader:true" style="height:60px;background: #666;">
        <div class="logo">后台管理</div>
        <div class="logout">
            您好，<?php echo $_SESSION['admin'] ?> | <a href="logout.php">退出</a>
        </div>
    </div>
    <div data-options="region:'south',title:'南-无',split:true,noheader:true" style="height:35px;line-height:30px;text-align:center;">
        @2019-2020 Web前端 Power By PHP and EasyUI
    </div>
    <div data-options="region:'west',title:'西-导航',split:true" style="width:180px;padding:10px;">
        <ul id="nav"></ul>
    </div>
    <div data-options="region:'center'" style="overflow:hidden;">
        <div id="tabs">
            <div title="起始页" style="padding: 0 10px;display: block;">
                <p>欢迎来到后台管理系统</p>
            </div>
        </div>
    </div>


    <script type="text/javascript" src="easyui/jquery.min.js"></script>
    <script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
    <script type="text/javascript" src="js/admin.js"></script>
</body>
</html>