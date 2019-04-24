/******************************/
/********** Cached Element References **********/
/******************************/
const aboutLink = $('.about-link');
const skillsLink = $('.skills-link');
const projectsLink = $('.projects-link');
const resumeLink = $('.resume-link');
const contactLink = $('.contact-link');
const about = $('#about');
const skills = $('#skills');
const projects = $('#projects');
const resume = $('#resume');
const contact = $('#contact');
/******************************/
/********** Functions **********/
/******************************/
// skills.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
/* selects class that triggers scroll */
aboutLink.click(function() { 
    $('html, body').animate({
        /* class I want to scroll to  */
        scrollTop: about.offset().top 
    }, 500); /*animation time length*/
});

skillsLink.click(function() { 
    $('html, body').animate({
        scrollTop: skills.offset().top 
    }, 500); 
});

projectsLink.click(function() { 
    $('html, body').animate({
        scrollTop: projects.offset().top 
    }, 500); 
});

resumeLink.click(function() { 
    $('html, body').animate({
        scrollTop: resume.offset().top 
    }, 500); 
});

contactLink.click(function() { 
    $('html, body').animate({
        scrollTop: contact.offset().top 
    }, 500); 
});
