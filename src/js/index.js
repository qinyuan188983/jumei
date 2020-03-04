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

        autoplay: {
            delay: 1000
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

    $('.body>.title>li').click(function () {
        $(this) // 你点击的那一个 li
            .addClass('active') // 添加类名
            .siblings() // 所有兄弟元素(不包含自己)
            .removeClass('active') // 移除类名
        if ($(".body>.title>.tomorrow").hasClass("active")) {
            $('.body>.fengqiang')
                .css('display', 'none')
        } else {
            $('.body>.fengqiang')
                .css('display', 'block')
        }

    })

    $('.shangping>.top').hover(function () {
        // console.log("进来了");
        $(this).css('opacity', 0.6);
        $(this).find(".shopcart").show();
        $(this).find(".haiwai").show();
    }, function () {
        // console.log("出来了");
        $(this).find(".shopcart").hide();
        $(this).find(".haiwai").hide();
        $(this).css('opacity', 1)
    })
    $(window).scroll(function () {
        console.log($(window).scrollTop());

        if ($(window).scrollTop() >= 500) {
            $('.body-left').css('display', 'block');
            $('.body-left>.shangxin').click(function () {
                $(window).scrollTop(500);
            })
            $('.body-left>.bikan').click(function () {
                $(window).scrollTop(1000);
            })
            $('.body-left>.shouye').click(function () {
                $(window).scrollTop(0);
            })
        }else{
            $('.body-left').css('display', 'none');
        }
    })
})



{/* <div class="shangping fl pr">
<div class="top pr">
    <img src="http://p2.jmstatic.com/product/004/985/4985762_std/4985762_dx_1000_400.jpg" alt="">
    <span class="mianshui pa">极速<br> 免税店</span>
    <a class="pa shopcart" href="../pages/cart.html">加入购物车</a>
    <span class="haiwai pa"> 海外直采 海外价格 闪电发货</span>
</div>
<p class="miaoshu">范思哲(WERSACE)香水晶钻女士淡香水</p>
<p class="price pa">¥209</p>
</div> */}

$.ajax({
    url: '../lib/index-list.json',
    dataType: 'json',
    success: function (res) {
        console.log(res);

        let str = '';

        res.forEach(item => {
            str += `<div class="shangping fl pr">
                        <div class="top pr">
                            <img src="${item.list_url}" alt="">
                            <span class="mianshui pa">极速<br> 免税店</span>
                            <a class="pa shopcart" href="../pages/cart.html">加入购物车</a>
                            <span class="haiwai pa"> 海外直采 海外价格 闪电发货</span>
                        </div>
                        <p class="miaoshu">${item.list_name}</p>
                        <p class="price pa">${item.list_price}</p>
                    </div> `;
            $('.allshangping').html(str);
        })
    }
})