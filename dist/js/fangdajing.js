"use strict";$(function(){$("middleArea").width(parseFloat($("middleImg").width())/parseFloat($("bigImg").width())*parseFloat($("bigArea").width())),$("middleArea").height(parseFloat($("middleImg").height())/parseFloat($("bigImg").height())*parseFloat($("bigArea").height()));var o=parseFloat($("bigArea").width())/parseFloat($("middleArea").width());$("middleImg").on({mouseenter:function(){$("middleArea").css({display:"block"}),$("bigArea").css({display:"block"}),document.onmousemove=function(e){var i=e||window.event,t=i.pageX-oBox.offsetLeft-middleImg.offsetLeft-middleArea.offsetWidth/2,d=i.pageY-oBox.offsetTop-middleImg.offsetTop-middleArea.offsetWidth/2;t<=0&&(t=0),t>=middleImg.offsetWidth-middleArea.offsetWidth&&(t=middleImg.offsetWidth-middleArea.offsetWidth),d<=0&&(d=0),d>=middleImg.offsetHeight-middleArea.offsetHeight&&(d=middleImg.offsetHeight-middleArea.offsetHeight),middleArea.style.left=t+"px",middleArea.style.top=d+"px",console.log(o),bigImg.style.left=-o*t+"px",bigImg.style.top=-o*d+"px"}}}),$("middleImg").on({mouseleave:function(){$("middleArea").css({display:"none"}),$("bigArea").css({display:"none"})}});for(var e=document.querySelectorAll("#small li"),i=0;i<e.length;i++)e[i].tempindex=i,e[i].onclick=function(){console.log(this.tempindex),middleImg.children[0].setAttribute("src","images/images2/".concat(this.tempindex+1,"_2.jpeg"))}});