"use strict";$.ajax({url:"../lib/nav-1.json",dataType:"json",success:function(o){console.log(o);var n="";o.forEach(function(o){n="",n+='<dt><a href="#">'.concat(o.name,"</a> </dt>"),o.list.forEach(function(o){n+='<dd class="fl"><a href="#">'.concat(o.list2,"</a> </dd>")}),n+="",$(".mz-2>dl").html(n)})}}),$(function(){$("#mz").on({mouseover:function(){$("#mz .fq").stop().slideDown()},mouseout:function(){$("#mz .fq").stop().slideUp()}}),$(".kefu").on({mouseover:function(){$(".kefubox").stop().slideDown()},mouseout:function(){$(".kefubox").stop().slideUp()}}),$(".money").on({mouseover:function(){$(".moneybox").stop().slideDown()},mouseout:function(){$(".moneybox").stop().slideUp()}}),$(".xinyuan").on({mouseover:function(){$(".xinyuanbox").stop().slideDown()},mouseout:function(){$(".xinyuanbox").stop().slideUp()}}),$(".zuji").on({mouseover:function(){$(".zujibox").stop().slideDown()},mouseout:function(){$(".zujibox").stop().slideUp()}}),$(".paixu-list>.topper>.nav>li").click(function(){$(this).addClass("active").siblings().removeClass("active")}),$(".kouhong-icon").hover(function(){console.log("进来了"),$(".kouhong-icon").css({" transform":"scale(1.1)"}).siblings().removeClass("bigger")},function(){$(".kouhong-icon").removeClass("bigger")})}),$.ajax({url:"../lib/list-menu.json",dataType:"json",success:function(o){var n="";o.forEach(function(o){n+='<div class="kh-list main ">\n            <div class="list-title fl">\n            '.concat(o.list_title,'</div>\n            <div class="list-name fl">'),o.list_menu.forEach(function(o){n+='<span class="fl">'.concat(o.list_name,"</span>")}),n+="</div></div>",$(".body>.menu").html(n)})}}),$.ajax({url:"../lib/kh-list.json",dataType:"json",success:function(o){console.log(o);var n="";o.forEach(function(o){n+='<a class="kouhong-icon fl">\n            <span class="haiwai ">[海外自营]</span>\n            <img src="'.concat(o.kh_img,'" alt="">\n            <span class="xiangqing">').concat(o.kh_name,'</span>\n            <span class="price ">¥').concat(o.kh_price,'</span>\n            <span class="golook">去看看</span>\n             </a>'),$(".kouhong").html(n)})}});