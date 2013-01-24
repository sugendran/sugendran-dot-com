(function(window, document, $) {
    var winHeight = 100, halfHeight = 50, pixelsPerDegree = 1.8, halfWidth = 100;
    var titleWidth = 400, titleMaxLeft = 400, titleHeight = 100;
    var docElem = document.documentElement;
    var canTransform = typeof(docElem.style.webkitTransform) != "undefined" || typeof(docElem.style.    MozTransform) != "undefined" || typeof(docElem.style.transform) != "undefined";
    function onResize() {
        winHeight = $(window).height();
        halfHeight = (winHeight * 0.5);
        halfWidth= $(window).width() * 0.5;
        var titleElem = $("#title");
        titleWidth = titleElem.width();
        titleHeight = titleElem.height();
        titleMaxLeft = (halfWidth - (titleWidth * 0.5));
        pixelsPerDegree = 90 / halfHeight;
        $("div.panel.main")
            .css("minHeight", winHeight + "px")
            .children("div.menu").css("margin-top", halfHeight - 42 + "px");
        titleElem.css({ 
            "bottom": (halfHeight + 64) + "px",
            "left": titleMaxLeft + "px"
        });
        onScroll();
    }
    function onScroll() {
        var offset = $(document).scrollTop();
        if(!canTransform) return;
        var angle = Math.max(0 - (offset * pixelsPerDegree), -90);
        var anglePercent = (angle / -90);
        var anglePercentInverse = 1 - anglePercent;
        var left = titleMaxLeft * anglePercentInverse - titleHeight * anglePercent;
        var rotation = "rotate(" + angle + "deg)";
        $("#title").css({
            "-webkit-transform": rotation,
            "-moz-transform": rotation,
            "transform": rotation,
            "left": left + "px"
        });
    }
    $(window).resize(onResize);
    $(document).scroll(onScroll);
    $(function() {
        if(!canTransform) {
            $("#title").css("display", "absolute");
        }
        onResize();
        onScroll();
        $("dd.screenshots a").fancybox();
    });
})(window, document, jQuery);