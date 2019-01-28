var osd = OpenSeadragon({
    id:            "openseadragon",
    tileSources:   [
        "https://openseadragon.github.io/example-images/highsmith/highsmith.dzi"
    ],
    showNavigator: true,
    navigatorAutoFade: false,
    showNavigationControl: false
}), isNavDraggable = true,
    options = {
        getOverlayUrl: function(level, x, y) {
            return "blend-tiles/0_1.png";
        }
    },
    overlay = osd.MarkerOverlay(options);