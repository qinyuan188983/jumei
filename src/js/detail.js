const info = {};
info.id = JSON.parse(localStorage.getItem('goodsID'))

// console.log(id);


// 2. 判断数据是否存在
if (!info) {
    // 能执行表示 !info 是一个 true
    // 表示 info 是一个 false
    // 表示数据不存在
    alert('您要查看的数据不存在')
    // 跳转回列表页面
    window.location.href = './list.html'
}
$(function () {
    $(".addToCart").on({
        click: function () {
            const cartList = JSON.parse(localStorage.getItem('cartList')) || []

       
            let exits = cartList.some(item => {
                // 数组里面每一个的 id === 本页面的这条数据的 id
                return item.id === info.id
            })

            // console.log(exits)
            if (exits) {
          
                let data = null
                for (let i = 0; i < cartList.length; i++) {
                    if (cartList[i].id === info.id) {
                        data = cartList[i]
                        break
                    }
                }
                // data 就是我找到的这个信息
                data.number++

                data.xiaoji = data.number * data.price 

              
            } else {
              
                info.number = 1

                // 4-5. 多添加一些信息
                info.xiaoji = info.price // 因为默认是第一个, 小计就是单价
                info.isSelect = false // 默认不选中
                cartList.push(info)
            }

            // 在存储到 localStorage 里面
            console.log(info.price);
            
            localStorage.setItem('cartList', JSON.stringify(cartList))
        }
    })

})

var price;


$.ajax({
    url: '../lib/kh-list.json',
    dataType: 'json',
    success: function (res) {
        // console.log(res);

        let str = '';

        res.forEach(item => {
            // console.log(item.kh_id);

            info.price=item.kh_price;

            if (item.kh_id == info.id) {
                // console.log("jinll");

                str += `
                <div id="middleImg">
                <img
                    src="${item.kh_img}" />
                <div id="middleArea"></div>
                </div>
                <div id="bigArea">
                <img id="bigImg"
                src="${item.kh_img}" />
                </div>`
            }
            $('#box').html(str);
        })
    }

})

