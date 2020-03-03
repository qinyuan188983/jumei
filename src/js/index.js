//渲染导航栏部分


{/* <dl>
 name   <dt><a href="">嘿嘿嘿</a> </dt>
  list list2  <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
    <dd class="fl"><a href="">嘿嘿嘿</a> </dd>
</dl> */}
$.ajax({
    url: '../lib/nav-1.json',
    dataType: 'json',
    success: function (res) {
        console.log(res);

        let str = '';

        res.forEach(item => {
            str = "";
            str += `<dt><a href="#">${item.name}</a> </dt>`;
            // console.log(item.name);

            item.list.forEach(list => {
                // console.log(list.list2);
                str += `<dd class="fl"><a href="#">${list.list2}</a> </dd>`;
            })
            str += '';
            $('.mz-2>dl').html(str);
        })
    }
})

$(function () {
    $('#mz').on({
        mouseover: function () {
            $('#mz .fq').stop().slideDown();
        },
        mouseout: function () {
            $('#mz .fq').stop().slideUp();
        }
    })
    $(".kefu").on({
        mouseover: function () {
            $('.kefubox').stop().slideDown();
        },
        mouseout: function () {
            $('.kefubox').stop().slideUp();
        }
    })
    $(".money").on({
        mouseover: function () {
            $('.moneybox').stop().slideDown();
        },
        mouseout: function () {
            $('.moneybox').stop().slideUp();
        }
    })
    $(".xinyuan").on({
        mouseover: function () {
            $('.xinyuanbox').stop().slideDown();
        },
        mouseout: function () {
            $('.xinyuanbox').stop().slideUp();
        }
    })
    $(".zuji").on({
        mouseover: function () {
            $('.zujibox').stop().slideDown();
        },
        mouseout: function () {
            $('.zujibox').stop().slideUp();
        }
    })
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        autoplay:{
            delay:1000
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
})

