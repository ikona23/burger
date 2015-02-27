// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require_tree .


$(document).ready(function() {
    var theToggle = document.getElementById('toggle');

    // hasClass
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    // addClass
    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }
    // removeClass
    function removeClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
    // toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0 ) {
                newClass = newClass.replace( " " + className + " " , " " );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    theToggle.onclick = function() {
        toggleClass(this, 'on');
        return false;
    }
});


$(document).ready(function() {

    function contentSwitcher(settings){
        var settings = {
            contentClass : '.content',
            navigationId : '#navigation'
        };
        $(settings.contentClass).not(':first').hide();
        $(settings.navigationId).find('li:first').addClass('active');

        $(settings.navigationId).find('a').click(function(e){
            var contentToShow = $(this).attr('href');
            contentToShow = $(contentToShow);
            e.preventDefault();
            $(settings.navigationId).find('li').removeClass('active');
            $(this).parent('li').addClass('active');
            $(settings.contentClass).hide();
            contentToShow.show();
        });
    }
    contentSwitcher();
});

$(document).ready(function () {
    var divs = $('.mydivs>div');
    var now = 0; // currently shown div
    divs.hide().first().show();
    $("svg[name=next]").click(function (e) {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $("svg[name=prev]").click(function (e) {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show();
    });
});

$(document).ready(function() {
    var instaFeed = new Instafeed({
        get: 'user',
        userId: 6678174,
        accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
        target: 'instafeed',
        sortBy: 'most-recent',
        limit: 32,
        resolution: 'standard_resolution',
        template: '<a class="fancybox" href="{{image}}"><img src="{{image}}" /><div id="filter">{{model.filter}}</div><div class="info"><p class="location"><i class="icon-location"></i>{{location}}</p><p><i class="icon-comment"></i>{{caption}}</p><br><ul><li class="icon-heart">{{likes}} likes<li class="icon-chat">{{comments}} comments</ul></div></a>'
    }).run();

    $.fn.extend({
        matchHeight: function (data) {
            var maxHeight = 0;
            $(this).each(function () {
                maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            });
            $(this).height(maxHeight);
        }
    });

});


$(document).ready(function() {
    var mapCanvas = document.getElementById('map-canvas');
    var myLatLng = new google.maps.LatLng(48.141528, 17.110242);
    var mapOptions = {
        zoom: 13,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var infowindow = new google.maps.InfoWindow({
        content: 'Regal Burger',
        position: myLatLng
    });
    infowindow.open(map);

    var infwindow = new google.maps.InfoWindow({
        content: 'Regal Burger' +
        ' Palackeho 4',
        position: buLatLng
    });
    infowindow.open(map);
});

