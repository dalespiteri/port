function skillSwap(skillLink, skill, description) {
    // controlls the animation between skill selections
    // skill link is the menu option selected
    // skill is div containing the selected skill
    // description is the copy at the bottom of the page associated with each skill

    $('.skill-item').removeClass('skill-link-active');
    // remove all instances of skill-link-active on links
    
    $(skillLink).addClass('skill-link-active');
    // add the active class to the selected link

    $('.skill-box').addClass('skill-flip');
    // animate the box to appear to spin around

    if ($('.skill-container').hasClass('skill-row')) {
        // if the current layout is in a left to right layout...

        setTimeout(function () {
            $('.skill-container').removeClass('skill-row');
            // ...remove that layout class...
            $(skill).addClass('skill-row-reverse');
            // ...add the reverse layout class...
        }, 200);
        // ...now the new skill is visible halfway through the skill flip animation giving the appearance of being on the back of the previous skill

    } else {
        // same as before, except reverse the layout the opposite direction

        setTimeout(function () {
            $('.skill-container').removeClass('skill-row-reverse');
            $(skill).addClass('skill-row');
        }, 200);

    }

    $('.skill-paragraph').removeClass('visible-skill-description');
    // remove all visibility from the bottom copy
    
    $(description).addClass('visible-skill-description');
    // add visibility to the correct bottom copy

    setTimeout(function () {
        $('.skill-box').removeClass('skill-flip');
    }, 400);
    // after all animations are complete, remove the animation class on the skill box so that next time it is applied, the animation will reset

}

$('.html-skill-link').click(function () {
    skillSwap('.html-skill-link', '.html-skill-container', '.html-skill-description');
});
$('.css-skill-link').click(function () {
    skillSwap('.css-skill-link', '.css-skill-container', '.css-skill-description');
});
$('.jquery-skill-link').click(function () {
    skillSwap('.jquery-skill-link', '.jquery-skill-container', '.jquery-skill-description');
});
$('.ps-skill-link').click(function () {
    skillSwap('.ps-skill-link', '.ps-skill-container', '.ps-skill-description');
});
$('.ill-skill-link').click(function () {
    skillSwap('.ill-skill-link', '.ill-skill-container', '.ill-skill-description');
});

$('.right-arrow').click(function () {
    // using if statements, determine which skill is active, and which skill should be next in order to navigate to
    if ($('.html-skill-link').hasClass('skill-link-active')) {
        skillSwap('.css-skill-link', '.css-skill-container', '.css-skill-description');
    } else if ($('.css-skill-link').hasClass('skill-link-active')) {
        skillSwap('.jquery-skill-link', '.jquery-skill-container', '.jquery-skill-description');
    } else if ($('.jquery-skill-link').hasClass('skill-link-active')) {
        skillSwap('.ps-skill-link', '.ps-skill-container', '.ps-skill-description');
    } else if ($('.ps-skill-link').hasClass('skill-link-active')) {
        skillSwap('.ill-skill-link', '.ill-skill-container', '.ill-skill-description');
    } else if ($('.ill-skill-link').hasClass('skill-link-active')) {
        skillSwap('.html-skill-link', '.html-skill-container', '.html-skill-description');
    }
});

$('.left-arrow').click(function () {
    // same as the right arrow, but this time to determine the proper preceeding skill link to navigate to
    if ($('.html-skill-link').hasClass('skill-link-active')) {
        skillSwap('.ill-skill-link', '.ill-skill-container', '.ill-skill-description');
    } else if ($('.css-skill-link').hasClass('skill-link-active')) {
        skillSwap('.html-skill-link', '.html-skill-container', '.html-skill-description');
    } else if ($('.jquery-skill-link').hasClass('skill-link-active')) {
        skillSwap('.css-skill-link', '.css-skill-container', '.css-skill-description');
    } else if ($('.ps-skill-link').hasClass('skill-link-active')) {
        skillSwap('.jquery-skill-link', '.jquery-skill-container', '.jquery-skill-description');
    } else if ($('.ill-skill-link').hasClass('skill-link-active')) {
        skillSwap('.ps-skill-link', '.ps-skill-container', '.ps-skill-description');
    }
});
