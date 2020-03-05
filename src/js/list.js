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

let cont = 1;
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
    $('.paixu-list>.topper>.nav>li').click(function () {
        $(this) // 你点击的那一个 li
            .addClass('active') // 添加类名
            .siblings() // 所有兄弟元素(不包含自己)
            .removeClass('active') // 移除类名
        // if ($(".body>.title>.tomorrow").hasClass("active")) {
        //     $('.body>.fengqiang')
        //         .css('display', 'none')
        // } else {
        //     $('.body>.fengqiang')
        //         .css('display', 'block')
        // }

    })
    $(".kouhong>.kouhong-icon").hover(function () {
        // console.log("进来了");

        $(".kouhong>.kouhong-icon").addClass('bigger')
            .siblings() // 所有兄弟元素(不包含自己)
            .removeClass('bigger') // 移除类名
    }, function () {
        $(".kouhong>.kouhong-icon").removeClass("bigger");
    })

    //按价格排列
    //设置默认升序排列
    let flag = true;
    $("#price").click(function () {
        // kouhongArr=kouhongArr.list_price;
        flag = !flag;//点击的时候可以不停的切换升序降序排列
        kouhongArr.sort(function (a, b) {
            if (flag) {
                return a.kh_price - b.kh_price;
            } else {
                return b.kh_price - a.kh_price;
            }
        })
        //排序之后再渲染一下页面        
        var arr = kouhongArr.slice((cont - 1) * 12, cont * 12);

        // arr.length=12;
        let str = '';
        kouhongArr.forEach(item => {
            // console.log(num);

            // str = "";
            str += `<div class="kouhong-icon fl">
                <span class="haiwai ">[海外自营]</span>
                <img src="${item.kh_img}" alt="">
                <span class="xiangqing">${item.kh_name}</span>
                <span class="price ">¥${item.kh_price}</span>
                <a href="../pages/detail.html" class="golook btn">去看看</a>
                 </div>`;
            $('.kouhong').html(str);
        })

    })

    //页面跳转
    $('.nextpages').pagination({
        pageCount: 8,
        jump: true,
        coping: true,
        current: 1,
        homePage: '首页',
        endPage: '末页',
        prevContent: '上页',
        nextContent: '下页',
        callback: function (api) {
            // console.log(api.getCurrent())
            cont = api.getCurrent();
            // console.log(cont);
            getShop();

        }
    });
})

function getShop() {
    //下面单个商品的数据请求
    $.ajax({
        url: '../lib/kh-list.json',
        dataType: 'json',
        success: function (res) {
            // console.log(res);
            // console.log("进来了");        
            var arr = res.slice((cont - 1) * 12, cont * 12);

            // arr.length=12;
            console.log(arr);


            let str = '';
            arr.forEach(item => {
                // console.log(num);

                // str = "";
                str += `<div class="kouhong-icon fl">
            <span class="haiwai ">[海外自营]</span>
            <img src="${item.kh_img}" alt="">
            <span class="xiangqing">${item.kh_name}</span>
            <span class="price ">¥${item.kh_price}</span>
            <a href="../pages/detail.html" class="golook btn">去看看</a>
             </div>`;
                $('.kouhong').html(str);
            })
        }
    })
}

var kouhongArr = [];
//下面单个商品的数据请求
$.ajax({
    url: '../lib/kh-list.json',
    dataType: 'json',
    success: function (res) {
        kouhongArr = res;
        // console.log(res);
        // console.log("进来了");        
        var arr = kouhongArr.slice((cont - 1) * 12, cont * 12);

        // arr.length=12;


        let str = '';
        kouhongArr.forEach(item => {
            // console.log(num);

            // str = "";
            str += `<div class="kouhong-icon fl">
        <span class="haiwai ">[海外自营]</span>
        <img src="${item.kh_img}" alt="">
        <span class="xiangqing">${item.kh_name}</span>
        <span class="price ">¥${item.kh_price}</span>
        <a href="../pages/detail.html" class="golook btn">去看看</a>
         </div>`;
            $('.kouhong').html(str);
        })
    }
})






$.ajax({
    url: '../lib/list-menu.json',
    dataType: 'json',
    success: function (res) {
        // console.log(res);

        let str = '';

        res.forEach(item => {
            // str = "";
            str += `<div class="kh-list main ">
            <div class="list-title fl">
            ${item.list_title}</div>
            <div class="list-name fl">`;
            // console.log(item.list_title);

            item.list_menu.forEach(list => {
                // console.log(list.list_name);
                str += `<span class="fl">${list.list_name}</span>`;
            })
            str += '</div></div>';
            $('.body>.menu').html(str);
        })
    }

})


