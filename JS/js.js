
$(document).ready(function() {
    var lastScrollTop = 200;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        console.log(st);
        if (st > lastScrollTop){
            $('.bg-dark').addClass('position-fixed');
        } else {
            $('.bg-dark').removeClass('position-fixed');
        }
    });

});
$(document).ready(function () {
    $(".my-btn").click(function () {
        // change active
        $(".my-btn").removeClass("active")
        $(this).addClass("active")
    })
});
$(document).ready(function () {
    var total = 1;
        $(".minus").click(function () {
            total = total - 1;
            $('.value').text(total);
        })
        $(".plus").click(function () {
            total = total + 1;
            $('.value').text(total);
        })
})
$(document).ready(function () {
    $('.img1').on({
        'click': function(){
           $('.img-avatar img').attr('src','../Image/44950364_281488286037750_2029375367369719808_n.jpg')
        }
    });
    $('.img2').on({
        'click': function(){
            $('.img-avatar img').attr('src','../Image/44848389_340136206563069_2245706887179796480_n.jpg')
        }
    });
    $('.img3').on({
        'click': function(){
            $('.img-avatar img').attr('src','../Image/45002191_265491137436573_6877448873871147008_n.jpg')
        }
    });
})