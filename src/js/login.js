var flag=$('.autologin');
var username=$('.uname').text;
var userpass=$('.upass').text;
console.log(username);
console.log(userpass);


$.ajax({
    url:'/login',
    type:'post',
    data:{
        uname:username,
        upass:userpass
    },
    dataType:'json',
    success:function(res){
        console.log(res);
        
    }
})