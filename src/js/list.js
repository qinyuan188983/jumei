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
    $(".kouhong-icon").hover(function () {
        console.log("进来了");

        $(".kouhong-icon").css({
           " transform": "scale(1.1)"
        } )
            .siblings() // 所有兄弟元素(不包含自己)
            .removeClass('bigger') // 移除类名
    }, function () {
        $(".kouhong-icon").removeClass("bigger");
    })

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


$.ajax({
    url: '../lib/kh-list.json',
    dataType: 'json',
    success: function (res) {
        console.log(res);
        // console.log("进来了");

        let str = '';

        res.forEach(item => {
            // str = "";
            str += `<a class="kouhong-icon fl">
            <span class="haiwai ">[海外自营]</span>
            <img src="${item.kh_img}" alt="">
            <span class="xiangqing">${item.kh_name}</span>
            <span class="price ">¥${item.kh_price}</span>
            <span class="golook">去看看</span>
             </a>`;
            $('.kouhong').html(str);
        })
    }
})