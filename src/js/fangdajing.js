$(function () {
    // * 公式: 小图 / 大图 = 小区域 / 大区域 *
    //     只能修改小区域 *
    //     小区域 = (小图 / 大图) * 大区域 *
    //     比例 = 大区域 / 小区域

    // var oBox = document.querySelector('#box')

    // var middleImg = document.querySelector("#middleImg"); //小图
    // var bigImg = document.querySelector("#bigImg"); //大图
    // var middleArea = document.querySelector('#middleArea'); //小区域
    // var bigArea = document.querySelector('#bigArea'); //大区域
    // 350 / 800 =  100/ 400
    $('middleArea').width(parseFloat($("middleImg").width())
        / parseFloat($("bigImg").width()) *
        parseFloat($("bigArea").width()))
    $('middleArea').height(parseFloat($("middleImg").height())
        / parseFloat($("bigImg").height()) *
        parseFloat($("bigArea").height()))
    // 注意:只有在小区域调整了大小后,才能计算比例
    //     比例 = 大区域 / 小区域
    var oScale = parseFloat($("bigArea").width()) / parseFloat($("middleArea").width());
    //鼠标进入
    $("middleImg").on(
        {
            "mouseenter": function () {
                $("middleArea").css({
                    "display": "block"
                }); // 小区显示
                $("bigArea").css({
                    "display": "block"
                }); //大区域显示

                document.onmousemove = function (evt) {
                    var e = evt || window.event;
                    var disX = e.pageX - oBox.offsetLeft - middleImg.offsetLeft - middleArea.offsetWidth / 2;
                    var disY = e.pageY - oBox.offsetTop - middleImg.offsetTop - middleArea.offsetWidth / 2;

                    if (disX <= 0) {
                        disX = 0
                    }

                    if (disX >= middleImg.offsetWidth - middleArea.offsetWidth) {
                        disX = middleImg.offsetWidth - middleArea.offsetWidth
                    }

                    if (disY <= 0) {
                        disY = 0
                    }
                    if (disY >= middleImg.offsetHeight - middleArea.offsetHeight) {
                        disY = middleImg.offsetHeight - middleArea.offsetHeight
                    }
                    middleArea.style.left = disX + "px";
                    middleArea.style.top = disY + "px";
                    console.log(oScale)

                    bigImg.style.left = -oScale * disX + "px";
                    bigImg.style.top = -oScale * disY + "px"

                }
            }
        })

    $("middleImg").on({
        "mouseleave": function () {
            $("middleArea").css({
                "display": "none"
            }) // 小区隐藏
            $("bigArea").css({
                "display": "none"
            }) //大区域隐藏
            // document.onmousemove = null;
        }
    })


    var oLis = document.querySelectorAll("#small li");
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].tempindex = i; // ?

        oLis[i].onclick = function () {
            console.log(this.tempindex)
            middleImg.children[0].setAttribute("src", `images/images2/${this.tempindex + 1}_2.jpeg`);
            // bigImg.src = oLis[this.tempindex].
        }
    }
})
