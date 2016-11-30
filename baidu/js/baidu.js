$(function(){
    var num=0;
    var clientH=$(window).height();
    var flag=true;
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $("#fullpage").mousemove(function(e){
        e.preventDefault();
    })
    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
            return;
        }
               num++;
        if(num==$("section").length){
        num=$("section").length-1;
            return;
    }
    flag=false;
    $("#fullpage").css({
        marginTop:-num*clientH
    })
    })
touch.on("body","swipedown","#fullpage",function(e){
    if(!flag){
        return;
    }
    num--;
    if(num==-1){
    num=0;
        return;
}
    flag=false;
$("#fullpage").css({
    marginTop:-num*clientH
})
})
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
              flag=true;
        $("section").each(function(index,obj){
            if(index==0){
                return;
            }else{
                if(index==num){
                    $(".left-img").eq(num).css({
                        opacity:1,transform:"translateX(50px)",
                        transition:"transform 1s ease "
                    })
                    $(".right-img img").eq(num).css({
                        opacity:1,transform:"translateX(-20px)",transition:"transform 1s ease "
                    })
                }else{
                    $(".left-img").eq(index).css({
                        transform:"translateX(-50px)",opacity:0
                    })
                    $(".right-img img").eq(index).css({
                        transform:"translateX(20px)",opacity:0
                })
            }
        }
    })
})
    var flag1=true;
    $(".menu-option").click(function(){
        if(flag1){
            $(this).find(".menu-option-tline").css({
                "transform":"translate(0,5px) rotate(45deg)",
            })
            $(this).find(".menu-option-bline").css({
                "transform":"translate(0,-5px) rotate(-45deg)",
        })
            $(".menu a").css({
                display:"block"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:0,
                    transform:"rotateX(0deg)",
                    animation:"menu 0.3s linear forwards "+0.2*index+"s"
                })
            })
            flag1=false
        }else{
            $(this).find(".menu-option-tline").css({
                "transform":"none",
            })
            $(this).find(".menu-option-bline").css({
                "transform":"none",
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    transform:"rotateX(0deg)",
                    animation:"menu1 0.3s linear forwards "+(1.4-0.2*index)+"s"
                })
            })
            setTimeout(function(){
                $(".menu a").css({
                    display:"none"
                })
            },1700)
            flag1=true;
        }
    })
    $(window).resize(function(){
        clientH=$(window).height();
        var clientW=$(window).width();
        $("#fullpage").css("marginTop",clientH*-num);
        if(clientW>1000){
            $(".menu a").css({
                opacity:0,
                transform:"rotate(90deg)",
                animation:"none"
            })
            $(".menu-option-bline,.menu-option-tline").css({
                transform:"none"
            })
            flag1=true;
        }
    })
})