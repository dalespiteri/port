function skillSwap(skillLink, skill, description) {

    $('.skill-item').removeClass('skill-link-active');
    $(skillLink).addClass('skill-link-active');


    $('.skill-box').addClass('skill-flip');

    if ($('.skill-container').hasClass('skill-row')) {

        setTimeout(function () {
            $('.skill-container').removeClass('skill-row');
            $(skill).addClass('skill-row-reverse');
        }, 200);

    } else {

        setTimeout(function () {
            $('.skill-container').removeClass('skill-row-reverse');
            $(skill).addClass('skill-row');
        }, 200);

    }

    $('.skill-paragraph').removeClass('visible-skill-description');
    $(description).addClass('visible-skill-description');

    setTimeout(function () {
        $('.skill-box').removeClass('skill-flip');
    }, 400);

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
