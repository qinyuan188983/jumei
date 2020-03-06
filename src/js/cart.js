const cartList = JSON.parse(localStorage.getItem('cartList'))

let selectNum = 0;
let Allshop = 0;
let Allmoney = 0;
$(function () {
    $('.shop>.shop-top>#all').click(function () {
        console.log($('.shop>.shop-top>#all'));

        // 让每一个选项 input 改变状态
        $('.shop>.cont>.btn1').prop('checked', this.checked)
    })

    // 2. 每一个选项按钮
    $('.shop>.cont>.btn1').click(function () {

        $('.shop>.shop-top>#all').prop('checked', [].every.call($('.shop>.cont>.btn1'), function (item, index) { return item.checked === true }))
    })
    if (!cartList) {
        //当本地没有数据的时候.也就是没有东西加入购物车的时候
        $(".without").css('display', 'block')
        $(".shop").css('display', 'none')
        $(".result").css('display', 'none')
    } else {
        $(".without").css('display', 'none')
        $(".shop").css('display', 'block')
        $(".result").css('display', 'block')
    }


    //数量的加减


    // 点击删除的事件
    $('.cont').on('click', '.del', function () {
        // 拿到自己身上的 id        
        const id = $(this).parent().attr("id")
        console.log('把数组中 id 为 : ' + id + ' 的数去去掉, 从新渲染页面, 从新存储到 lcoalStorage')
        let index;
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id == id) {
                console.log(cartList[i].id);
                index = i;
            }
        }
        cartList.splice(index, index + 1);
        console.log(cartList);

        localStorage.setItem('cartList', JSON.stringify(cartList));

        //重新渲染一遍页面
        Allshop=0;
        Allmoney=0;
        $.ajax({
            url: '../lib/kh-list.json',
            dataType: 'json',
            success: function (res) {
                Allshop ++;
                Allmoney += item.kh_price * list.number;
                // console.log(res);

                let str = '';

                console.log(cartList);

                cartList.forEach(list => {
                    res.forEach(item => {

                        if (item.kh_id == list.id) {

                            str += `
                            
                        <div class="cont" id="${list.id}">
                            <input type="checkbox" class="fl btn1">
                            <img class="fl" src="${item.kh_img}" alt="">
                            <p class="xiangqing fl">
                                <span class="jisu1">
                                    [极速免税]
                                </span>
                                <span class="jisu2">${item.kh_name}</span>
                            </p>
                            <div class="price fl">${item.kh_price}</div>
                            <div class="num fl">
                                <input type="button" class="btn btn-default" value="-"></button>
                                <input type="text" class="shuliang" value=${list.number}></input>
                                <input type="button" class="btn btn-default" value="+"></button>
                            </div>
                            <div class="xiaoji fl">${item.kh_price * list.number}</div>
                            <span class="fl del btn glyphicon glyphicon-trash"></span>
                        </div>`
                        }
                    })
                    let str2 = `
                    <div class="shop-top">
                    <input class="fl" id="all" type="checkbox">
                    <span class="fl span1">聚美优品发货</span>
                    <span class="fl span2">聚美价</span>
                    <span class="fl span3">数量</span>
                    <span class="fl span4">小计(元)</span>
                    <span class="fl span5">操作</span>
                    </div>`

                    str2 += str
                    $('.shop').html(str2);
                })
            }

        })

        $('.result>.zongshu>.num').text(Allshop);
        $('.result>.gongji>.num').text(Allmoney);

    })




})

$.ajax({
    url: '../lib/kh-list.json',
    dataType: 'json',
    success: function (res) {
        // console.log(res);

        let str = '';

        console.log(cartList);

        cartList.forEach(list => {
            res.forEach(item => {

                if (item.kh_id == list.id) {
                    Allshop ++;
                    Allmoney += item.kh_price * list.number;
                    str += `
                    
                <div class="cont" id="${list.id}">
                    <input type="checkbox" class="fl btn1">
                    <img class="fl" src="${item.kh_img}" alt="">
                    <p class="xiangqing fl">
                        <span class="jisu1">
                            [极速免税]
                        </span>
                        <span class="jisu2">${item.kh_name}</span>
                    </p>
                    <div class="price fl">${item.kh_price}</div>
                    <div class="num fl">
                        <input type="button" class="btn btn-default" value="-"></button>
                        <input type="text" class="shuliang" value=${list.number}></input>
                        <input type="button" class="btn btn-default" value="+"></button>
                    </div>
                    <div class="xiaoji fl">${item.kh_price * list.number}</div>
                    <span class="fl del btn glyphicon glyphicon-trash"></span>
                </div>`
                }
            })
            let str2 = `
            <div class="shop-top">
            <input class="fl" id="all" type="checkbox">
            <span class="fl span1">聚美优品发货</span>
            <span class="fl span2">聚美价</span>
            <span class="fl span3">数量</span>
            <span class="fl span4">小计(元)</span>
            <span class="fl span5">操作</span>
            </div>`

            str2 += str
            $('.shop').html(str2);

            $('.result>.zongshu>.num').text(Allshop);
            $('.result>.gongji>.num').text(Allmoney);
        })
    }
})
