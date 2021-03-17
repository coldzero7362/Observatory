window.onload = function () {
    console.log("연결됨 ");
    $('.menu>li>ul').hide();
    $(".gallery").hide();
    $(".popup").hide();

    $('.menu > li').hover(function (e) {
        let index = $(this).index();
        $(".menu > li > ul").eq(index).stop().slideDown();
    }, function (e) {
        $(".menu > li > ul").stop().slideUp();
    });


    $('.slide > ul>li').hide();
    $('.slide > ul>li:first-child').show();

    setInterval(function () {
        $('.slide>ul>li:first-child').fadeOut().next().fadeIn().end(1000).appendTo('.slide>ul');
    }, 3000);

    $('.newsTab').click(function(){
        $(this).css({
            'background-color': '#ff9900',
            'border-bottom': 'none'
        });
        $('.galleryTab').css({
            'background-color': '#ffd28f',
            'border-bottom': '1px solid #333'
        });
        $('.news').show();
        $('.gallery').hide();
    });
    $('.galleryTab').click(function(){
        $(this).css({
            'background-color': '#ff9900',
            'border-bottom': 'none'
        });
        $('.newsTab').css({
            'background-color': '#ffd28f',
            'border-bottom': '1px solid #333'
        });
        $('.news').hide();
        $('.gallery').show();
    });
    $('.open').click(()=>{
        $('.popup').show();
    });
    $('.close').click(()=>{
        $('.popup').hide();
    });
}