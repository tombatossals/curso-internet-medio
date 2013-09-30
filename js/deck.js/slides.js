$(function() {
    if ($.browser.msie && parseInt($.browser.version) < 9) {
        window.location.replace("../explorer.html"); 
    }
	// Deck initialization
	$.deck('.slide');

    var wh = window.innerHeight - 60;
     
    updategal();

    $(document).keydown(function(e) {
        switch (e.keyCode) {
            case 38:
                gnext();
                break;
            case 40:
                gprev();
                break;
            default:
                updategal();
                break;
        }
    });

    function updategal() {
        $("div.slide.gallery.deck-current").hover(function() {
            $(this).children("h2").hide();
        }, function() {
            $(this).children("h2").show();
        });

        var g = $("div.slide.gallery.deck-current");
        g.children("img").first().addClass("curimg");
        if (g.length > 0) {
            var g = $("div.slide.gallery.deck-current");
            var current  = g.children("img.curimg");
            current.css("height", wh + "px");
            var imgs = g.children("img")
            if (imgs.length >= 1) {
                var total = imgs.size();
                var active = imgs.index(current) + 1;
                g.children("h2").text(active + "/" + total + " " + current.attr("alt"));
            }
        }
    }

    function gprev() {
        var g = $("div.slide.gallery.deck-current");
        var current  = g.children("img.curimg");
        var n = current.prev("img");
        if (n.length > 0) {
            current.removeClass("curimg");
            n.addClass("curimg");
            n.css("height", wh + "px");

            var imgs = g.children("img")
            var total = imgs.size();
            var active = imgs.index(current);
            g.children("h2").text(active + "/" + total + " " + n.attr("alt"));
        }
        return true;
    }

    function gnext() {
        var g = $("div.slide.gallery.deck-current");
        var current  = g.children("img.curimg");
        var n = current.next("img");
        if (n.length > 0) {
            current.removeClass("curimg");
            n.addClass("curimg");
            n.css("height", wh + "px");
            g.children("h2").text(n.attr("alt"));

            var imgs = g.children("img")
            var total = imgs.size();
            var active = imgs.index(current) + 2;
            g.children("h2").text(active + "/" + total + " " + n.attr("alt"));
        }
        return true;
    }

});
