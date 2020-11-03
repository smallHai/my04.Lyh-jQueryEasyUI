<?php

    session_start();
    if(!isset($_SESSION['admin'])){
        header('location:index.html');
    }

?>

<link rel="stylesheet" type="text/css" href="css/tdata.css">

<table id="tdata"></table>

<div id="tdata_tool">
    <div>
        <a class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="toolOpt.add()">添加</a>
        <a class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="toolOpt.edit()">编辑</a>
        <a class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="toolOpt.delete()">删除</a>
        <a class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="toolOpt.reload()">刷新</a>
        <a class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="toolOpt.redo()">取消选择</a>
    </div>
    <div>
        查询帐号：<input type="text" name="user" class="textbox" style="width:100px;">
        时间从：<input type="text" name="date_from" class="easyui-datebox" style="width:100px;" editable="false">
        到：<input type="text" name="date_to" class="easyui-datebox" style="width:100px;" editable="false">
        <a href="javascript:;" class="easyui-linkbutton" plain="true" iconCls="icon-search">确定查询</a>
    </div>
</div>

<form id="tdata_form" style="margin:0;padding:5px 0 0 25px;color:#333;">
    <input type="hidden" id="idValue" name="id">
    <p>帐号：<input type="text" id="account" name="account" class="textbox"></p>
    <p>密码：<input type="password" id="pws" name="pws" class="textbox"></p>
    <p>权限：<input type="text" id="auth" name="auth" class="textbox"></p>
</form>



<script type="text/javascript" src="js/tdata.js"></script>