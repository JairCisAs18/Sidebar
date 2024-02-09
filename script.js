$(".btn").click(function(){
    $(".container").animate({width:"toggle"});
    $("p").css('visibility', 'visible');
    $("i").css('visibility', 'visible');
});

$("body").click(function(e){
    var $container = $(".container");
    var $button = $(".btn")
    var $containerxxl = $(".container-xxl")
    if(!$container.is(e.target) && $container.has(e.target).length === 0 && !$button.is(e.target) && $button.has(e.target).length === 0 && !$containerxxl.is(e.target) && $containerxxl.has(e.target).length === 0){
        $container.animate({width:"toggle"});
        $("p").css('visibility', 'hidden');
        $("i").css('visibility', 'hidden');
    }
});