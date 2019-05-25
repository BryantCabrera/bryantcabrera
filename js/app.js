/******************************/
/********** Cached Element References **********/
/******************************/
const $window = $(window);

const $aboutLink = $('.about-link');
const $skillsLink = $('.skills-link');
const $projectsLink = $('.projects-link');
const $resumeLink = $('.resume-link');
const $contactLink = $('.contact-link');
const $about = $('#about');
const $skills = $('#skills');
const $projects = $('#projects');
const $resumePDFlink = $('#resume--versions__link--pdf');
const $resumePDF = $('#resume--pdf');
const $resumeDigitalLink = $('#resume--versions__link--digital');
const $resumeDigital = $('#resume--digital')
const $resume = $('#resume');
const $contact = $('#contact');

const $navLinear = $('#nav--linear');
const $navHamburger = $('#nav--hamburger');
const $hamburgerLink = $('.hamburger__link');
const $hamburgerCheckbox = $('.hamburger__checkbox');

/******************************/
/********** Functions **********/
/******************************/
$window.on('scroll', function(){
    if (window.scrollY > 200) {
        $navLinear.addClass('hidden');
        $navHamburger.removeClass('hidden');
    } else {
        $navLinear.removeClass('hidden');
        $navHamburger.addClass('hidden');
    }
});

/* selects class that triggers scroll */
$aboutLink.click(function() { 
    $('html, body').animate({
        /* class I want to scroll to  */
        scrollTop: $about.offset().top 
    }, 500); /* animation time length */
});

$skillsLink.click(function() { 
    $('html, body').animate({
        scrollTop: $skills.offset().top 
    }, 500); 
});

$projectsLink.click(function() { 
    $('html, body').animate({
        scrollTop: $projects.offset().top 
    }, 500); 
});

$resumeLink.click(function() { 
    $('html, body').animate({
        scrollTop: $resume.offset().top 
    }, 500); 
});

$contactLink.click(function() { 
    $('html, body').animate({
        scrollTop: $contact.offset().top 
    }, 500); 
});

/* Hamburger Functionality */
$hamburgerLink.click(function() {
    $hamburgerCheckbox.prop("checked", false);
});

$resumeDigitalLink.click(function () {
    $resumeDigital.toggle();
});