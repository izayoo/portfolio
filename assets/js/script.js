window.onscroll = function() { addSticky() };

$about = $('#about');
$experience = $('#experience');
$projects = $('#projects');
$messageMe = $('#messageMe');

function addSticky() {
    removeSticky();
    if (window.pageYOffset > $messageMe.offset().top) {
        $messageMe.find(".section-header").addClass("sticky");
    }
    
    if (window.pageYOffset > $projects.offset().top) {
        $projects.find(".section-header").addClass("sticky");
    }
    
    if (window.pageYOffset > $experience.offset().top) {
        $experience.find(".section-header").addClass("sticky");
    }
    
    if (window.pageYOffset > $about.offset().top) {
        $about.find(".section-header").addClass("sticky");
    }
}

function removeSticky() {
    $(".section-header").removeClass("sticky");
}
