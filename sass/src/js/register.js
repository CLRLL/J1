
	$('#number').blur(function () {
       var number = $('#number').val();
       var usernumber = /^1[3|4|5|7|8|]\d{9}$/;
       // 判断用户名
       if(number == '') {
       	$(this).css({'border':'1px solid #cc0000','background':'url(../img/reg-right.jpg) -30px center no-repeat #fff'});
       $('#cellhide').css('display','block').find('p').text('手机号不能为空').css('color','#cc0000');
        
        return false;
       } else {
       	 if(!usernumber.test(number)) {
        $(this).css({'border':'1px solid #cc0000','background':'url(../img/reg-right.jpg) -30px center no-repeat #fff'});
       	$('#cellhide').css('display','block').find('p').text('手机号码格式不正确').css('color','#cc0000'); 
       	console.log(usernumber.test(number));
       	return false;
       }else {
       	 	 $(this).css({'background':'url(../img/reg-right.jpg) 243px center no-repeat #fff','border':'1px solid #eee'});
       	 	 $('#cellhide').css('display','none').find('p').text('');
       	   }
       }
	});
    

    // 判断密码
 $('#pass').blur(function () {
    var password = $('#pass').val();
    var userpassword1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    
    var userpassword2 = /^(?![^a-zA-Z]+$)(?!\D+$).{6,20}$/;
// $('#pass').blur(function () {
    if(password == '') {
       $('#pass').css({'border':'1px solid #cc0000','background':'url(../img/reg-right.jpg) -30px center no-repeat #fff'});
       $('.passwordhide').css('display','block').find('p').text('请输入密码').css('color','#cc0000');
       return false;
    } 
    	if(!userpassword1.test(password)) {
         $('#pass').css({'border':'1px solid #cc0000','background':'url(../img/reg-right.jpg) -30px center no-repeat #fff'});
       	$('.passwordhide').css('display','block').find('p').text('请输入6-20个大小写英文字母，符号或数字').css('color','#cc0000'); 
    	  return false;
    	
    	} 
    		if(!userpassword2.test(password)) {
               $('#pass').css({'border':'1px solid #cc0000','background':'url(../img/reg-right.jpg) -30px center no-repeat #fff'});
       	     $('.passwordhide').css('display','block').find('p').text('密码只输入6-20位字符').css('color','#cc0000'); 
    		
              return false;
    		} 

    		
    		 $('#pass').css({'background':'url(../img/reg-right.jpg) 243px center no-repeat #fff','border':'1px solid #eee'});
       	 	 $('.passwordhide').css('display','none').find('p').text('');
    
 });



 // 再次确认密码
$('.again').blur(function () {
    var again = $('.again').val();
    var password = $('#pass').val();
    if(again == '' ) {
       $('.again').css({'border':'1px solid #cc0000','background':'url(../img/reg-right.jpg) -30px center no-repeat #fff'});
       $('.again-hide').css('display','block').find('p').text('请再次输入密码').css('color','#cc0000');
       
       return false;
    } else {
    	 if(again !== password) {
    	 	 $('.again').css({'border':'1px solid #cc0000','background':'url(../img/reg-right.jpg) -30px center no-repeat #fff'});
       	    $('.again-hide').css('display','block').find('p').text('两次输入密码不一致').css('color','#cc0000'); 
    	 return false;
    	 } else {

    	 	 $('.again').css({'background':'url(../img/reg-right.jpg) 243px center no-repeat #fff','border':'1px solid #eee'});
       	 	 $('.again-hide').css('display','none').find('p').text('');
    	 }
    
    }
});

 
// if(为空){
// 	...
// }else{
// 	//则不为空
// 	if(验证失败){
// 		...
// 	}else{
// 		//则验证成功
// 		...
// 	}
// }