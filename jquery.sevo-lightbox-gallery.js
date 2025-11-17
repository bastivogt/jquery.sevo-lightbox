(function($) {
    $.fn.sevoLightbox = function(options) {

        let settings = $.extend({
            overlayBackgroundColor: "rgba(0, 0, 0, .9)",
            closeContent: "Close", 
            imageMaxWidth: "80%",
            imageMaxHeight: "80%",
            overlayID: "sevo-lightbox-overlay", 
            closeAtClick: false
        }, options);

        return this.each(function() {
            let overlay;
            let overlayInner;
            let img;
            let closeBtn;
            buildLightbox();

            $(this).find("a").on("click", function(e) {
                e.preventDefault();
                const href = $(this).attr("href");

                img = $("<img />");
                img.attr("src", href);
                img.css({
                    "display": "block",
                    "max-width": settings.imageMaxWidth,
                    "max-height": settings.imageMaxHeight
                });

                overlayInner.append(img);
                $("html").css("overflow", "hidden");
                overlay.show();
            });

            function close() {
                img.remove();
                overlay.hide();
                $("html").css("overflow", "auto");
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
                    "display": "none"
                });

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
                closeBtn.addClass("close-btn");
                overlayInner.append(closeBtn);
                overlay.append(overlayInner);
                
                $("body").append(overlay);
            }

            
        });
    };
}(jQuery));