$(function () {
	$.ajax({
		url: 'http://10.0.157.218:8989/aaa',
		type: 'get',
		dataType: 'json',
		cache:false,
		success: function (data) {
		//console.log(data);
		for (var picObj of data.result.good_list) {
			var $div_2 = $('.main-3');
			var $div_3 = $('<div></div>');
			$div_3.attr('class', 'main-3-1');
			$div_3.attr('width', '200');
			$div_3.attr('height', '2000');
			$div_3.appendTo($div_2);

			var $img = $('<img/>');
			$img.attr('src', picObj.thum_img.big);
			$img.attr('width', '200');
			$img.attr('height', '210');
			$img.appendTo($div_3); 

				var $p = $('<p></p>');
				$p.appendTo($div_3);
				$p.text('苹果 iPad');

				var $p1 = $('<p></p>');
				$p1.appendTo($div_3);
				$p1.text('全新 64 G 黑色');

				var $h3 = $('<h3></h3>');
				$h3.appendTo($div_3);
				$h3.text('￥5288');

				var $span = $('<span></span>');
				$span.appendTo($div_3);
				$span.text('黑色64G真机实拍，全新未拆封');

				var $h6 = $('<h6></h6>');
				$h6.appendTo($div_3);
				$h6.text('此 商 品 享 受 全 国 百 店 联 保');
			}
		}
	});

	$.ajax({
		url: 'http://10.0.157.218:8989/bbb',
		type: 'get',
		dataType: 'json',
		cache:false,
		success: function (data) {
		//console.log(data);
		for (var picObj of data.result.product_list) {
			 // console.log(picObj.thum_img);
			 var $div = $('.main-5');
			 var $div_1 = $('<div></div>');
			 $div_1.attr('class', 'main-5-1');
			 $div_1.appendTo($div);
			 // 创建img
			 var $img = $('<img/>');
			 // 设置img属性 添加src 地址
			 $img.attr('src', picObj.thum_img.big);
			 $img.appendTo($div_1);

			 // 创建p标签
			 var $p = $('<p></p>');
			 // 设置p 的文本
			 $p.text('苹果 iPhone 6S');
			 // 追加p 到div_1
			 $p.appendTo($div_1);
			 // 再创建一个 p
			 var $p1 = $('<p></p>');
			 // 给p添加文本
			 $p1.text('高性价比爆款机型，速抢，手慢无！');
			 // 追加 p1 到 div_1
			 $p1.appendTo($div_1);
			 // h3
			 var $h3 = $('<h3></h3>');
			 $h3.text('2099');
			 // 追加
			 $h3.appendTo($div_1);
			 // span
			 var $span = $('<span></span>');
			 $span.text('6折抢苹果6S 64G').appendTo($div_1);
			 // a 
			 var $a = $('<a></a>');
			 $a.text('大内存 新机品质').appendTo($div_1);
			}
		 }
	});

	$.ajax({
		url: 'http://10.0.157.218:8989/ccc',
		type: 'get',
		dataType: 'json',
		cache:false,
		success: function (data) {
		console.log(data);

		for (var tehui of data.result.flash_list) {
			console.log(tehui);
			 var $div = $('.main');

			 var $div_1 = $('<div></div>');
			 $div_1.attr('class', 'main-1');
			 $div_1.appendTo($div);

			 var $img = $('<img/>');
			 $img.attr('src', tehui.thum_img.old);
			 $img.appendTo($div_1);

			 $h4 = $('<h4></h4>');
			 // $h4.after($img);
			 $h4.text('苹果 iPhone7 特价').after($img);
			}
		}
	});
});