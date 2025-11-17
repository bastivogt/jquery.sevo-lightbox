(function($) {
    console.log("Hello world!");
    $("#gallery").sevoLightbox({
        closeContent: "Schließen",
        closeAtClick: true, 
        showCaption: true,
        overlayBackgroundColor: "rgba(0, 0, 0, 0.8)"
    });
}(jQuery));