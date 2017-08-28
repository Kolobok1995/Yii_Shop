$(document).ready(function(){





    $(".shop .header").click(function(){
        show_or_hide(".shop");
    });
    $(".interest .header").click(function(){
        show_or_hide(".interest");
    });
    $(".drow .header").click(function(){
        show_or_hide(".drow");
    });

    $("#ButtonEnter").click(function(){

        $(".register").show(400);
        $(".enter").hide(400);
    });
    $("#CloseButton").click(function(){

        $(".enter").show(400);
        $(".register").hide(400);
    });




});


function show_or_hide(n){

    if($(n+" .main").hasClass("active"))
    {
        $(n+" .main").removeClass("active");
        $(n+" .main").hide(400);
    }
    else{
        $(n+" .main").addClass("active");
        $(n+" .main").show(400);

    }




}