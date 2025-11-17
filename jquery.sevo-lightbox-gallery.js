(function($) {
    $.fn.sevoLightbox = function(options) {

        let settings = $.extend({
            overlayBackgroundColor: "rgba(0, 0, 0, .9)",
            overlayZIndex: "999",
            closeContent: "Close", 
            imageMaxWidth: "80%",
            imageMaxHeight: "80%",
            overlayID: "sevo-lightbox-overlay", 
            closeAtClick: false,
            showCaption: true,
            fadeSpeed: 250
        }, options);

        return this.each(function() {
            let overlay;
            let overlayInner;
            let img;
            let closeBtn;
            let caption;




            buildLightbox();

            

            $(this).find("a").on("click", function(e) {
                e.preventDefault();
                const href = $(this).attr("href");
                if(settings.showCaption) {
                    const dataCaption = $(this).data("caption") ? $(this).data("caption") : "";
                    caption.text(dataCaption);

                }
                
                //altText = $(this).find("img").attr("alt")

                img = $("<img />");
                img.attr("src", href);
                img.css({
                    "display": "block",
                    "max-width": settings.imageMaxWidth,
                    "max-height": settings.imageMaxHeight
                });



                overlayInner.append(img);

                $("html").css("overflow", "hidden");
                //overlay.show();
                overlay.fadeIn(settings.fadeSpeed);
            });

  

            function close() {
                overlay.fadeOut(settings.fadeSpeed, function() {
                    img.remove();
                    overlay.hide();
                    $("html").css("overflow", "auto");
                });

            }

            closeBtn.on("click", function(e) {
                e.stopPropagation();
                close();
            });


            if(settings.closeAtClick) {
                overlayInner.on("click", function(e) {
                    e.stopPropagation();
                    close();
                });
            }

            function buildLightbox() {
                overlay = $("<div></div>");
                overlay.css({
                    "background-color": settings.overlayBackgroundColor,
                    "position": "absolute",
                    "top": "0px",
                    "left": "0px",
                    "bottom": "0px",
                    "width": "100%",
                    "height": "100%", 
                    //"display": "none",
                    "z-index": settings.overlayZIndex
                });
                overlay.hide();

                overlay.attr("id", settings.overlayID);

                overlayInner = $("<div></div>");
                overlayInner.css({
                    "width": "100%",
                    "height": "100%",
                    "display": "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "position": "relative"
                });

                closeBtn = $(`<div>${settings.closeContent}</div>`);
                closeBtn.css({
                    "color": "white",
                    "position": "absolute",
                    "top": "10px",
                    "right": "10px",
                    "cursor": "pointer"

                });

                if(settings.showCaption) {
                    caption = $("<p></p>");
                    caption.addClass("sevo-ligthbox-caption");
                    caption.css({
                        "color": "white",
                        "font-style": "italic",
                        "position": "absolute",
                        "bottom": "5px"
    
                    });

                }
                

                closeBtn.addClass("close-btn");
                overlayInner.append(closeBtn);
                overlayInner.append(caption);
                overlay.append(overlayInner);
                
                
                $("body").append(overlay);
            }

            
        });
    };
}(jQuery));