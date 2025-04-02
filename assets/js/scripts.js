$(document).ready(function(){
    // hamburger
    $(".hamburger_menu").on('click',function(e){
        e.preventDefault();
        $(".header_menus").addClass("active")
        $("body").addClass("modal_open")
        $(".modal_overlay").addClass("active")
    })
    
    $(".close").on('click',function(e){
        e.preventDefault();
        $(".header_menus").removeClass("active")
        $("body").removeClass("modal_open")
        $(".modal_overlay").removeClass("active")
    })

});