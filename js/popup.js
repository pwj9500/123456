<script src="/js/jquery-3.6.0.min.js"></script>
$(document).ready(function(){

    var fp = parseInt($(".popup-menu-list").css('top'));

    $(".popup-content-box").scroll(function(){
        var scrollTop = $(".popup-content-box").scrollTop();
        var newPosition = scrollTop + fp + "px";

        $(".popup-menu-list").stop().animate({
            "top": newPosition
        }, {
            'duration' : 500,
            'easing' : 'easeInOutCubic',
            'complete' : function(){
                console.log('이동 완료');
            }
        });

    }).scroll();
});