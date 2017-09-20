// pageSwap function controls the navigation and movement of pages on the site

function pageSwap(link, section) {

    // the link parameter is the link clicked - the section parameter is the page to navigate to associated with that link

    $(link).click(function () {
        var page = $('.page');
        var nav = $('.navBar');

        if (nav.hasClass('navBarLeft')) {

            // page swapping will always be relative to what the current page layout is, so the page and nav bar will always swap depending on what the current layout of the page is. To determine what layout is currently in use, we use the current active class of the navigation bar. So if the navigation bar has the class navBarLeft, we can assume the layout is currently with the navigation bar on the left, and page on the right, therefore our script will run animations to swap the layout next time a link is clicked

            $(section).addClass('topPage pageLeftPre');

            // topPage ensures the current selected page will be above all other pages using z-indexing
            // pageLeftPre is the animation of the page from offscreen left, to on screen left

            nav.removeClass('navBarFront navBarLeft navBarRight').addClass('navBarRight');

            // remove all preexisting navigation bar classes controlling positioning just in case, and apply the new navigation position on the right

            setTimeout(function () {

                // we want to wait until the animation of the pages is complete before adjusting the code to prep for the next transition 

                page.removeClass('topPage subTopPage pageLeft pageRight');

                // remove all page position classes just in case 

                $(section).addClass('subTopPage pageLeft').removeClass('pageLeftPre');

                // add our new position classes to lock in for the next transition
                // the subTopPage class ensures that while the next animation occurs, our previous page will stay on top of the other pages until AFTER a new topPage moves above and animates overtop and replaces it as our new subTopPage - this is to hide the shuffling of pages from the user's view
                // we setTimeout to make sure this shuffle is done after the animations are complete and match our timeout to our animation durations which in this case is 600ms

            }, 600);

        } else {

            // now we just reverse our code to prep the pages in the opposite layout since our if statement in this scenario isn't true - if the navBarLeft class isn't applied to our navigation menu, then it must be on the right currently, and our class changes are the same as before except reversed 

            $(section).addClass('topPage pageRightPre');
            nav.removeClass('navBarFront navBarLeft navBarRight').addClass('navBarLeft');
            setTimeout(function () {
                page.removeClass('topPage subTopPage pageLeft pageRight');
                $(section).addClass('subTopPage pageRight').removeClass('pageRightPre');
            }, 600);
        }

    });
}

pageSwap('.aboutLink', '.aboutPage');
pageSwap('.skillsLink', '.skillsPage');
pageSwap('.portfolioLink', '.portfolioPage');
pageSwap('.contactLink', '.contactPage');

function activeLink(link, activeClass) {

    // activeLink controls navigation bar menu's link appearance while new sections are active
    // link is the link clicked - activeClass is the class associated with that link

    $(link).click(function () {
        $('.navList li').removeClass('aboutLinkActive skillsLinkActive portfolioLinkActive contactLinkActive navLinkActive');

        // remove any active link appearance classes 

        $(link).addClass(activeClass).addClass('navLinkActive');

        // add the activeClass parameter which is the specific CSS for each link (color)
        // add the navLinkActive class which are the general CSS rules for an active link 

    });
}

activeLink('.aboutLink', 'aboutLinkActive');
activeLink('.skillsLink', 'skillsLinkActive');
activeLink('.portfolioLink', 'portfolioLinkActive');
activeLink('.contactLink', 'contactLinkActive');

// controls the hamburger menu animation for smaller screens

$('.nav-menu-toggle, .navListLink').click(function () {

    // clicking either hamburger menu or a link will toggle the menu state between an open menu option  (hamburger menu) and a close menu option (an x) 

    $('.navBar').toggleClass('nav-bar-full');

    // nav-bar-full is the new add class for smaller screen that opens a full page menu

    $('.top-bar, .bottom-bar').toggleClass('menu-bar-gone');

    // fade out the top and bottom bars

    $('.middle-bar:nth-child(even)').toggleClass('nav-x-one');

    // middle bar on the hamburger menu is actually two bars overlapping - this rotates one 45 degrees to make one of the x lines

    $('.middle-bar:nth-child(odd)').toggleClass('nav-x-two');

    // this one rotates 45degrees in the opposite direction to form the second x line

})
