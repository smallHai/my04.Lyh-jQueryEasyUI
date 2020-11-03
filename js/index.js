
$(function(){

    //登录界面
    $("#login").dialog({
        title: "登录后台",
        width: 300,
        height: 180,
        modal: true,
        buttons: "#btn",
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

    //点击登陆
    $("#btn a").click(function(){
        if(!$("#account").validatebox("isValid")){
            $("#account").focus();
        }else if(!$("#pws").validatebox("isValid")){
            $("#pws").focus();
        }else{
            $.ajax({
                url: "clogin.php",
                type: "post",
                data: {
                    account: $("#account").val(),
                    password: $("#pws").val(),
                },
                beforeSend: function(){
                    $.messager.progress({text: "正在登录中..."});
                },
                success: function(data,response,status){
                    $.messager.progress("close");
                    if(data > 0){
                        location.href = "admin.php";
                    }else{
                        $.messager.alert("登录失败","用户名或密码错误","warning",function(){
                            $("#pws").select();
                        });
                    }
                }
            });
        }
    });

});
