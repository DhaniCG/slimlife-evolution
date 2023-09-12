$(() => {

    let currentSlider = 1;
    $(".testimonial-list").height($(".item-1").outerHeight() + 15);
    $(".testimonial-list li").width($(".testimonial-list").outerWidth());

    $(".video-thumbnail").on("click", () => {
        $(".video-thumbnail").remove();
        $(".video-wrapper").append('<video src="./files/ad1.mp4" controls muted autoplay id="main-video"></video>');
        $("#main-video").prop("muted", false);
    })

    $(".slider-navigation a.prev").on("click", (e) => {
        const target = $(e.currentTarget);
        
        if (target.hasClass("inactive") || $(".slider-navigation").hasClass("loading")) return;
        // Loading
        setTimeout(() => {
            $(".slider-navigation").removeClass("loading");
        }, 250);
        
        const nextBtn = $(".slider-navigation a.next");
        const currentSlide = $(`.item-${currentSlider}`);
        const nextSlide = $(`.item-${currentSlider - 1}`);
        
        currentSlider--;
        console.log(currentSlider);
        nextBtn.removeClass("inactive");
        if (currentSlider === 1) target.addClass("inactive");

        currentSlide.addClass("testimonial-before");
        currentSlide.removeClass("current-slide");
        nextSlide.removeClass("testimonial-after");
        nextSlide.addClass("current-slide");
        
        $(".slider-navigation").addClass("loading");
        // $(".testimonial-list").height($(".current-slide").outerHeight());
    })
    
    $(".slider-navigation a.next").on("click", (e) => {
        const target = $(e.currentTarget);
        
        if (target.hasClass("inactive") || $(".slider-navigation").hasClass("loading")) return;
        // Loading
        setTimeout(() => {
            $(".slider-navigation").removeClass("loading");
        }, 250);
        
        const prevBtn = $(".slider-navigation a.prev");
        const currentSlide = $(`.item-${currentSlider}`);
        const nextSlide = $(`.item-${currentSlider + 1}`);
        
        currentSlider++;
        console.log(currentSlider);
        prevBtn.removeClass("inactive");
        if (currentSlider === 3) target.addClass("inactive");

        currentSlide.addClass("testimonial-after");
        currentSlide.removeClass("current-slide");
        nextSlide.removeClass("testimonial-before");
        nextSlide.addClass("current-slide");
        
        $(".slider-navigation").addClass("loading");
        // $(".testimonial-list").height($(".current-slide").outerHeight());
    })
})