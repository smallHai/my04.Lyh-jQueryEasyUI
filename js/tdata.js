$(function(){

    //数据表
    $("#tdata").datagrid({
        url: 'tdata_json.php',
        fit: true,
        rownumbers: true,
        border: false,

        pagination: true,
        pageSize: 10,
        pageList: [10,20,30,50],
        pageNumber: 1,

        sortName: "ctime",
        sortOrder: "desc",

        toolbar: "#tdata_tool",

        columns: [[
            {
                field: "id",
                title: "编号",
                width: 100,
                checkbox: true,
            },
            {
                field: "account",
                title: "帐号",
            },
            {
                field: "auth",
                title: "权限",
            },
            {
                field: "ctime",
                title: "创建时间",
            },
        ]],
        
    });

    
    //表单弹窗
    $("#tdata_form").dialog({
        width: 350,
        title: "提交内容",
        modal: true,
        closed: true,
        buttons: [{
            text: "提交",
            iconCls: "icon-add",
            handler: function(){
                var id = $("#idValue").val();
                if(id == "#"){

                    if($("#tdata_form").form("validate")){
                        $.ajax({
                            url: "tdata_add.php",
                            type: "post",
                            data: {
                                account: $("#account").val(),
                                password: $("#pws").val(),
                                auth: $("#auth").combotree("getText"),
                            },
                            beforeSend: function(){
                                $.messager.progress({text: "正在提交中..."});
                            },
                            success: function(data,response,status){
                                $.messager.progress("close");
                                if(data){
                                    $.messager.show({
                                        title: "提示",
                                        msg: "新增成功",
                                    });

                                    $("#idValue").val("");
                                    $('#tdata_form').dialog("close").form("clear");
                                    $('#auth').combotree("clear");
                                    $("#tdata").datagrid("reload");

                                }else{
                                    $.messager.alert("提交失败","请重试","warning");
                                }
                            }
                        });
                    }

                }else if(!isNaN(id)){

                    if($("#tdata_form").form("validate")){
                        $.ajax({
                            url: "tdata_edit.php",
                            type: "post",
                            data: {
                                id: id,
                                account: $("#account").val(),
                                password: $("#pws").val(),
                                auth: $("#auth").combotree("getText"),
                            },
                            beforeSend: function(){
                                $.messager.progress({text: "正在提交中..."});
                            },
                            success: function(data,response,status){
                                $.messager.progress("close");
                                if(data){
                                    $.messager.show({
                                        title: "提示",
                                        msg: "修改成功",
                                    });

                                    $("#idValue").val("");
                                    $('#tdata_form').dialog("close").form("clear");
                                    $('#auth').combotree("clear");
                                    $("#tdata").datagrid("reload");

                                }else{
                                    $.messager.alert("提交失败","请重试","warning");
                                }
                            }
                        });
                    }
                }
            },
        },{
            text: "取消",
            iconCls: "icon-cancel",
            handler: function(){
                $("#idValue").val("");
                $('#tdata_form').dialog("close").form("clear");
            },
        }],
    });
    //账号验证
    $("#account").validatebox({
        required: true,
        missingMessage: "请输入账号",
        invalidMessage: "账号不能为空",
    });
    //密码验证
    $("#pws").validatebox({
        required: true,
        validType: "length[6,30]",
        missingMessage: "请输入密码",
        invalidMessage: "密码要6-30位",
    });
    //权限获取
    $("#auth").combotree({
        url: 'nav.php',
        lines: true,
        width: 200,
        required: true,
        multiple: true,
        checkbox: true,
        onlyLeafCheck: true,
        onLoadSuccess: function(node,data){
            var _this = this;
            if(data){
                $(data).each(function(index,value){
                    if(this.state == "closed"){
                        $(_this).tree("expandAll");
                    }
                });
            }
        },
    });



    //-工具栏操作
    toolOpt = {
        add: function(){
            $("#tdata_form").dialog("open");
            $("#idValue").val("#");
            $("#account").focus();
        },
        edit: function(){
            var rows = $("#tdata").datagrid("getSelections");
            if(rows.length ==0){
                $.messager.alert("提示信息","请先选择一条记录","warning");
            }else if(rows.length ==1){
                $.ajax({
                    url: "tdata_get.php",
                    type: "post",
                    data: {
                        id: rows[0].id,
                    },
                    beforeSend: function(){
                        $.messager.progress({text: "正在请求中..."});
                    },
                    success: function(data,response,status){
                        $.messager.progress("close");
                        if(data){
                            var dataObj = $.parseJSON(data);
                            var authObj = dataObj[0].auth.split(",");

                            $("#tdata_form").form("load",{
                                id: dataObj[0].id,
                                account: dataObj[0].account,
                            }).dialog("open");

                            $("#auth").combotree({
                                url: 'nav.php',
                                lines: true,
                                width: 200,
                                required: true,
                                multiple: true,
                                checkbox: true,
                                onlyLeafCheck: true,
                                onLoadSuccess: function(node,data){
                                    var _this = this;
                                    if(data){
                                        $(data).each(function(index,value){
                                            if($.inArray(value.text,authObj) !=-1){
                                                var t = $(_this).tree("find",value.id);
                                                $(_this).tree("check",t.target);
                                                
                                            }
                                            if(this.state == "closed"){
                                                $(_this).tree("expandAll");
                                            }
                                        });
                                    }
                                },
                            });

                        }else{
                            $.messager.alert("请求失败","请重试","warning");
                        }
                    }
                });
            }else if(rows.length >1){
                $.messager.alert("提示信息","只能选择一条记录","warning");
            }
        },
        delete:function(){
            var rows = $("#tdata").datagrid("getSelections");
            if(rows.length >0){
                $.messager.confirm("提示信息","确定要删除所选记录吗？",function(flag){
                    if(flag){
                        var ids = [];
                        for(var i=0;i<rows.length;i++){
                            ids.push(rows[i].id);
                        };
                        $.ajax({
                            url: "tdata_delete.php",
                            type: "post",
                            data: {
                                ids: ids.join(","),
                            },
                            beforeSend: function(){
                                $("#tdata").datagrid("loading");
                            },
                            success: function(data){
                                if(data){
                                    $("#tdata").datagrid("loaded");
                                    $("#tdata").datagrid("load");
                                    $("#tdata").datagrid("unselectAll");
                                    $.messager.show({
                                        title: "提示",
                                        msg: data+"条数据被成功删除",
                                    });
                                }
                            },
                        });
                    }
                });
            }else{
                $.messager.alert("提示信息","请选择要删除的记录","warning");
            }
        },
        reload:function(){
            $("#tdata").datagrid("reload");
        },
        redo:function(){
            $("#tdata").datagrid("unselectAll");
        }
    };

});

