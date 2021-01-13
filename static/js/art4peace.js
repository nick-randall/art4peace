var headerTop = $('#header-container').offset().top - 10;

$(document).scroll(function () {
    if ($(this).scrollTop() >= headerTop)
        $('#header-container').addClass('sticky');
    else
        $('#header-container').removeClass('sticky');
});

let currentId = null;
let currentTab =null;

var photoHeight = $('#title-photo').height();
const photoHeightSegments = 10;
let fadePoints = [];
    

dividePhotoIntoVerticalSegments();



function dividePhotoIntoVerticalSegments(){
    for (i = 0; i < photoHeightSegments; i++ ){
        
        let start = photoHeight / photoHeightSegments * i;
        let end = photoHeight / photoHeightSegments * (i + 1);

        fadePoints.push({
            start: start,
            end: end
            
        })

    /*console.log ('fadepoints [i].start: ' + fadePoints[i].start);
    console.log ('fadepoints [i].end: ' + fadePoints[i].end);*/
    }

    console.log('fadePoints: ' + fadePoints);
}


var textTop = $('#title-photo').position().top + $('#title-photo').height();
var textHeight = $('#main-text').height();

var photoHeight = $('#title-photo').height();

    


$(document).scroll(function () {
    var pageTop = $(this).scrollTop();
    var pageBottom = pageTop + $(window).height();

    if (pageBottom >= textTop + 250) {
        $('#main-text').addClass('visible');
        $('#header-container').addClass('opacity-full')
    }
    else {
        $('#main-text').removeClass('visible');
        $('#header-container').removeClass('opacity-full')
    }
    
    //map true or false where true === fade points are within the range; then check new Array for any that are true
    fadePoint = fadePoints.map(fadePoint => fadePoint.start < pageTop && fadePoint.end > pageTop).indexOf(true);

    if (fadePoint != -1 ) {
        photoFade = (photoHeightSegments - fadePoint) * (1 / photoHeightSegments);
        $('#title-photo').css("opacity", photoFade);
        console.log(photoFade);
    }



    /*if (pageTop < photoHeight) {
        photoFade = (photoHeight - pageTop) / photoHeight;
        photoFade = Math.max(photoFade, 0.0001)
        $('#title-photo').css("opacity", photoFade);
        console.log(photoFade);
    }*/
    findCurrentTab();
    function findCurrentTab() {
		let newCurrentId;
        let newCurrentTab;
        let navBarheight = ($('#header-container').height());

		$('.nav-buttons').each(function() {
		let id = $(this).attr('href');
		let currentTabTop = $(id).position().top - navBarheight;
		let currentTabBottom = $(id).position().top + $(id).height() - navBarheight;
    
            if($(window).scrollTop() > currentTabTop && $(window).scrollTop() < currentTabBottom) {
            newCurrentId = id;
            newCurrentTab = $(this);
            }
		    });
        if(currentId != newCurrentId || currentId === null) {

            console.log('currentId: ' + currentId);

            $(currentTab).css('color', 'purple');
            currentId = newCurrentId;
            currentTab = newCurrentTab;
            console.log('currentId: ' + currentId);
            console.log('currentTab: ' + currentTab);
            $(currentTab).css('color', 'white');
            
            }

    }
});