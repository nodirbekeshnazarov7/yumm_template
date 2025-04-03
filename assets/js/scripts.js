$(document).ready(function () {
    // hamburger
    $(".hamburger_menu").on('click', function (e) {
        e.preventDefault();
        $(".header_menus").addClass("active")
        $("body").addClass("modal_open")
        $(".modal_overlay").addClass("active")
    })

    $(".close").on('click', function (e) {
        e.preventDefault();
        $(".header_menus").removeClass("active")
        $("body").removeClass("modal_open")
        $(".modal_overlay").removeClass("active")
    })

    var storiesSwiper = new Swiper(".storiesSwiper", {
        spaceBetween: 24,
        slidesPerView: "auto",
        on: {
            progress: function (swiper, progress) {
                let progressWidth = 227 * progress;
                $(".progressbar_fill").css("width", `${progressWidth}px`);
            }
        }
    });
    $(".stories .progressbar_container").on("click", function (event) {
        let clickX = event.offsetX;
        let totalWidth = $(this).width();

        let newProgress = clickX / totalWidth;
        let newSlideIndex = Math.round(newProgress * (storiesSwiper.slides.length - 1));

        storiesSwiper.slideTo(newSlideIndex);
    });


    $(".accordion_item").on("click", function () {
        let content = $(this).find(".questions .accordion_content");
        let icon = $(this).find(".questions .accordion_icon");
    
        if ($(this).hasClass("active")) {
            content.css({"height": "0", "padding": "0 10px", "opacity": "0"});
            $(this).removeClass("active");
            icon.attr("src", "assets/img/accordion_show.svg");
        } else {
            $(".questions .accordion_item").removeClass("active").find(".questions .accordion_content").css({"height": "0", "padding": "0 10px", "opacity": "0"});
            $(".questions .accordion_icon").attr("src", "assets/img/accordion_show.svg");
    
            $(this).addClass("active");
            content.css({"height": "auto", "padding": "10px 10px", "opacity": "1"});
            icon.attr("src", "assets/img/accordion_hide.svg");
        }
    });
    


});