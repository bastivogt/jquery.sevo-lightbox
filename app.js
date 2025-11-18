(function($) {
    console.log("Hello world!");
    $("body").sevoLightbox({
        closeContent: "<button>Close</button>",
        closeAtClick: true, 
        showCaption: true,
        overlayBackgroundColor: "rgba(0, 0, 0, 0.8)"
    });



}(jQuery));