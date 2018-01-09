$(function () {
	   /*=======================banner============================*/
	// 先隐藏
	$('.tab-bar span').hide();
	$('.banner-data div').hide();
	// 添加悬浮效果  1
	$('.tab-bar li:eq(0)').mouseover(function() {
		// 追加高亮
        $(this).addClass('on').siblings().removeClass('on');
        // 三角显示
        $('.tab-bar li:eq(0) span').show();
        // div 显示
        $('.banner-data div:eq(0)').show().siblings().hide();
    }).mouseout(function() {
    	$(this).removeClass('on');
    	// 隐藏三角
    	 $('.tab-bar li:eq(0) span').hide();
    	 // 隐藏 div
    	  $('.banner-data div:eq(0)').hide()
    });

    // 2

    $('.tab-bar li:eq(1)').mouseover(function() {
		// 追加高亮
        $(this).addClass('on').siblings().removeClass('on');
        // 三角显示
        $('.tab-bar li:eq(1) span').show();
        // div 显示
        $('.banner-data div:eq(1)').show().siblings().hide();
    }).mouseout(function() {
    	$(this).removeClass('on');
    	// 隐藏三角
    	 $('.tab-bar li:eq(1) span').hide();
    	 // 隐藏 div
    	  $('.banner-data div:eq(1)').hide()
    });

    // 3

    $('.tab-bar li:eq(2)').mouseover(function() {
		// 追加高亮
        $(this).addClass('on').siblings().removeClass('on');
        // 三角显示
        $('.tab-bar li:eq(2) span').show();
        // div 显示
        $('.banner-data div:eq(2)').show().siblings().hide();
    }).mouseout(function() {
    	$(this).removeClass('on');
    	// 隐藏三角
    	 $('.tab-bar li:eq(2) span').hide();
    	 // 隐藏 div
    	  $('.banner-data div:eq(2)').hide()
    });

    // 4

     $('.tab-bar li:eq(3)').mouseover(function() {
		// 追加高亮
        $(this).addClass('on').siblings().removeClass('on');
        // 三角显示
        $('.tab-bar li:eq(3) span').show();
        // div 显示
        $('.banner-data div:eq(3)').show().siblings().hide();
    }).mouseout(function() {
    	$(this).removeClass('on');
    	// 隐藏三角
    	 $('.tab-bar li:eq(3) span').hide();
    	 // 隐藏 div
    	  $('.banner-data div:eq(3)').hide()
    });



    /*=======================banner============================*/

     /*=======================map============================*/
    //  $('.li_3').hide();
    //console.log($('.li_3'));
    //$('.li_3').css('display','none');
   

});