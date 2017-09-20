function skillSwapLeft(skillLink, skillArrow) {
    $(skillLink).click(function () {
        $('.upper-arrow, .mid-arrow').removeClass('html-arrow css-arrow jquery-arrow ps-arrow-mid ps-arrow-upper ill-arrow-upper ill-arrow-mid').addClass(skillArrow);
        $('.skill-item').removeClass('skill-link-active');
        $(skillLink).addClass('skill-link-active');
    })
}

skillSwapLeft('.html-skill-link', 'html-arrow');
skillSwapLeft('.css-skill-link', 'css-arrow');
skillSwapLeft('.jquery-skill-link', 'jquery-arrow');

function skillSwapRight(skillLink, skillArrowUpper, skillArrowMid) {
    $(skillLink).click(function () {
        $('.upper-arrow').removeClass('html-arrow css-arrow jquery-arrow ps-arrow-upper ill-arrow-upper').addClass(skillArrowUpper);
        $('.mid-arrow').removeClass('html-arrow css-arrow jquery-arrow ps-arrow-mid ill-arrow-mid').addClass(skillArrowMid);
        $('.skill-item').removeClass('skill-link-active');
        $(skillLink).addClass('skill-link-active');
    })
}

skillSwapRight('.photoshop-skill-link', 'ps-arrow-upper', 'ps-arrow-mid');
skillSwapRight('.illustrator-skill-link', 'ill-arrow-upper', 'ill-arrow-mid');
