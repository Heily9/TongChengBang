

$(function() {
    $.ajax({
        // 切换城市 GET
        // url: 'http://10.0.157.235:8886/city1',
        url: 'http://10.0.157.235:8999/cityone',
        type: 'get',
        dataType: 'json',
        cache:false,
        success: function (data) {
            //console.log(data);
        }
    });
 
    // 图片1
    $.ajax({
        // url: 'http://10.0.157.235:8886/city1',
        url: 'http://10.0.157.235:8999/picone',
        type: 'get',
        dataType: 'json',
        cache:false,
        success: function (data) {
           //  console.log(data);
           for (var phoneObj of data.result) {
               // 获取 ul
               var $ul = $('.photo-list-r-ul');
               // 创建 li
               var $li = $('<li></li>');
               // 将li 追加到ul
            //  $li.appendTo($ul);
                $ul.append($li);
               // 创建 a 
               var $a = $('<a></a>');
               //console.log($li);
               // 将a 追加到 li
                $li.append($a);
               // 创建 img
            var $img = $('<img/>');
            var $p = $('<p></p>');
             $img.attr('src',phoneObj.img_url);
            $a.append($img).append($p);
            $p.text(phoneObj.model_alis);
           }
        }
    });



    //图片2

    $.ajax({
        url: 'http://10.0.157.235:8999/pictwo',
        type: 'get',
        dataType: 'json',
        cache:false,
        success: function (data) {
           // console.log(data);
            for (var phoneObj1 of data.result) {
                var $ul = $('.photo-list-r-1-ul');
                var $li = $('<li></li>');
                $li.appendTo($ul);
                var $a = $('<a></a>');
                $a.appendTo($li);
                var $img = $('<img/>');
                $img.appendTo($a);
                $img.attr('src', phoneObj1.thum_img.big);
                var $p = $('<p></p>');
                $p.appendTo($a);
                $p.text(phoneObj1.brand_name);
                var $span = $('<span></span>');
                $span.appendTo($a);
                $span.text('￥' + phoneObj1.com_price);
            }
        }
       
    });

//  买电脑
    $.ajax({
        url: 'http://10.0.157.235:8999/mdn',
        type: 'get',
        dataType: 'json',
        cache:false,
        success: function (data) {
          //  console.log(data);  
          for (var photo in data.result) {
            var $ul = $('.div3 ul');
            var $li = $('<li></li>');
            $li.appendTo($ul).text(data.result[photo]);
          }
        }
       
    });

    //  二手手机
    $.ajax({
        url: 'http://10.0.157.235:8999/esj',
        type: 'get',
        dataType: 'json',
        cache:false,
        success: function (data) {
           // console.log(data);  
          for (var photoObj of data.result) {
            var $ul = $('.div4 ul');
            var $li = $('<li></li>');
            $li.appendTo($ul).text(photoObj.name);
          }
         }
       
    });

// 修电脑
    $.ajax({
        url: 'http://10.0.157.235:8090/xdn',
        type: 'get',
        dataType: 'json',
        cache:false,
        success: function (data) {
          //  console.log(data);  
            for (var hotObj of data.result.hot) {
                var $ul = $('.hot');
                var $li = $('<li></li>');
                $li.appendTo($ul).text(hotObj.name);
            }
            for (var otherObj of data.result.other) {
                var $ul = $('.other');
                var $li = $('<li></li>');
                $li.appendTo($ul).text(otherObj.name);
            }
         }
       
    });



    //  二手手机
    $.ajax({
        url: 'http://10.0.157.235:8090/xsj',
        type: 'get',
        dataType: 'json',
        cache:false,
        success: function (data) {
           // console.log(data);  
          for (var photoObj of data.result) {
            var $ul = $('.div1 ol');
            var $li = $('<li></li>');
            $li.appendTo($ul);
            var $span = $('<span></span>');
            $span.appendTo($li).text(photoObj.name);
            for (var photoList of photoObj.list) {
               // console.log(photoList.name);
                var $span = $('<span></span>');
                $span.appendTo($li);
                $span.text(photoList.name);
            }
          }
         }
       
    });


    // 到店维修

    $.ajax({
        url: 'http://10.0.157.235:8090/ddwx',
        type: 'get',
        dataType: 'json',
        cache:false,
        success: function (data) {
           // console.log(data);
            var $dl = $('#main_des dl');
            // console.log($des);
            for (var shopObj of data.shop_data) {
               var $dt = $('<dt></dt>');
               $dt.appendTo($dl);
               var $ul = $('<ul></ul>');
               $ul.appendTo($dt);
               var $li = $('<li></li>');
               $li.appendTo($ul);
               var $a = $('<a></a>');
               $a.appendTo($li);
               var $img = $('<img/>');
               $img.appendTo($a).attr('src',shopObj.shop_ico);

               var $li1 = $('<li></li>');
               $li1.appendTo($ul);
               var $p = $('<p></p>');
               $p.text(shopObj.shop_name);
               $p.appendTo($li1);
               var $p = $('<p></p>');
               $p.text('主营' + shopObj.main);
               $p.appendTo($li1);
               var $p = $('<p></p>');
               $p.text('地址' + shopObj.addr_detail);
               $p.appendTo($li1);

               var $li2 = $('<li></li>');
               $li2.appendTo($ul);
               var $p = $('<p></p>');
               var $span = $('<span></span>');
               $span.appendTo($p).attr('class','item1');
               var $span = $('<span></span>');
               $span.appendTo($p).text('先行赔付');
               $p.appendTo($li2);
               var $p = $('<p></p>');
               var $span = $('<span></span>');
               $span.appendTo($p).attr('class','item2');
               var $span = $('<span></span>');
               $span.appendTo($p).text('同城帮认证');
               $p.appendTo($li2);
            //    var $p = $('<p></p>');
            //    $p.appendTo($li2);

               var $p = $('<p></p>');
               $p.appendTo($li2).text('人气：' + shopObj.shop_visit);

               var $li3 = $('<li></li>');
               $li3.appendTo($ul).attr('id','li_3');
               var $p = $('<p></p>');
               $p.appendTo($li3).text('进入店铺');



            } 
         }
       
    });


   
});


 