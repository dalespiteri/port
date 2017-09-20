function pageSwap(link, section) {
    $(link).click(function () {
        var page = $('.page');
        var nav = $('.navBar');

        if (nav.hasClass('navBarLeft')) {

            $(section).addClass('topPage pageLeftPre');
            nav.removeClass('navBarFront navBarLeft navBarRight').addClass('navBarRight');
            setTimeout(function () {
                page.removeClass('topPage subTopPage pageLeft pageRight');
                $(section).addClass('subTopPage pageLeft').removeClass('pageLeftPre');
            }, 600);

        } else {

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
    $(link).click(function () {
        $('.navList li').removeClass('aboutLinkActive skillsLinkActive portfolioLinkActive contactLinkActive navLinkActive');
        $(link).addClass(activeClass).addClass('navLinkActive');
    });
}

activeLink('.aboutLink', 'aboutLinkActive');
activeLink('.skillsLink', 'skillsLinkActive');
activeLink('.portfolioLink', 'portfolioLinkActive');
activeLink('.contactLink', 'contactLinkActive');

$('.nav-menu-toggle, .navListLink').click(function () {
    $('.navBar').toggleClass('nav-bar-full');
    $('.top-bar, .bottom-bar').toggleClass('menu-bar-gone');
    $('.middle-bar:nth-child(even)').toggleClass('nav-x-one');
    $('.middle-bar:nth-child(odd)').toggleClass('nav-x-two');
})