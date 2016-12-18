$(function(){
		// 设置比例大小，进行比例布局
    function resize(originsize,type){
        var type=type||"x";
        var widths=document.documentElement.clientWidth;
        var heights=document.documentElement.clientHeight;
        if(type=="x"){
            var scale=widths/originsize*100;
        }else if(type=="y"){
            var scale=heights/originsize*100;
        }

        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
    }

    resize(1334,"y");
    var myScroll;
	myScroll = new IScroll('#wrapper', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
	});
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
 var mySwiper = new Swiper ('.swiper-container-banner', {
    loop: true,  
    // 如果需要分页器
    pagination: '.swiper-pagination',

  }) 
   var mySwiper1 = new Swiper ('.swiper-container-content', {
          watchSlidesProgress : true,
  }) 
// var play=document.getElementsByClassName("icon-bofang")[0];
// var audio=document.getElementsByClassName("audio")[0];
//      play.onclick=function(){
//          audio.play();
//      }
})
