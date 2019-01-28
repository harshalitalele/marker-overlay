/**
 *
 * @author Harshali Talele <https://github.com/harshalitalele/>
 */
(function($) {
    "use strict";

    $.Viewer.prototype.MarkerOverlay = function(options) {
        return new $.overlayCanvas(options, this);
    };
    
    function setOverlaySize(osd, overlay) {
        var imgSize = osd.canvas.getClientRects()[0],
            overlayStyle = overlay.style;
        overlayStyle.width = imgSize.width + "px";
        overlayStyle.height = imgSize.height + "px";
        overlay.width = imgSize.width;
        overlay.height = imgSize.height;
    }
    
    $.overlayCanvas = function(options, osd) {
        var overlayElem = document.createElement("canvas"),
            overlayStyle = overlayElem.style,
            imgSize = osd.canvas.getClientRects()[0];
        this.element = overlayElem;
        overlayStyle.pointerEvents = "none";
        overlayStyle.position = "absolute";
        overlayStyle.top = imgSize.top;
        overlayStyle.left = imgSize.left;
        overlayElem.setAttribute("id", "marker-overlay");
        osd.element.appendChild(overlayElem);
        setOverlaySize(osd, this.element);
        
        osd.addHandler("resize", function() {
            console.log("resize triggered");
            setOverlaySize(osd, overlayElem);
        });
    };
    
    $.overlayCanvas.prototype = {
        freezeCanvas: function() {
            //
        }
    }
}(OpenSeadragon));
