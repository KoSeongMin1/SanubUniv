$(".mainmenu>li").mouseover(function(){
    $(".submenu, .subback").stop().slideDown();
});
$(".mainmenu>li").mouseleave(function(){
    $(".submenu, .subback").stop().slideUp();
});

setInterval(function(){
    $(".slide").delay(2300);
    $(".slide").animate({marginLeft:"-1200px"},700);
    $(".slide").delay(2300);
    $(".slide").animate({marginLeft:"-2400px"},700);
    $(".slide").delay(2300);
    $(".slide").animate({marginLeft:"0px"},700);
});

$(".onClick").click(function(){
    $("#modal").show();
});
$(".modalbutton").click(function(){
    $("#modal").hide();
});