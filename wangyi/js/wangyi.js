$(document).ready(function() {
        $('#fullpage').fullpage({
            anchors:['page1', 'page2', 'page3','page4', 'page5', 'page6','page7', 'page8', 'page9','page10'],
            scrollingSpeed: 2000,
            navigation: true,
            onleave:function(index,nextIndex,direction){
                if(index==1){
               $(".section1").removeClass("active")
                }
               }
        });
    setTimeout(function(){
        $(".section1").addClass("active")
    },500)
    })