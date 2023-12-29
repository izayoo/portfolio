import './imports';

var about = $('#about');
var experience = $('#experience');
var projects = $('#projects');
var messageMe = $('#messageMe');

window.onscroll = function() { addSticky() };

function addSticky() {
    removeSticky();
    if (window.pageYOffset > messageMe.offset().top) {
        messageMe.find(".section-header").addClass("sticky");
        return;
    }
    
    if (window.pageYOffset > projects.offset().top) {
        projects.find(".section-header").addClass("sticky");
        return;
    }
    
    if (window.pageYOffset > experience.offset().top) {
        experience.find(".section-header").addClass("sticky");
        return;
    }
    
    if (window.pageYOffset > about.offset().top) {
        about.find(".section-header").addClass("sticky");
        return;
    }
}

function removeSticky() {
    $(".section-header").removeClass("sticky");
}
