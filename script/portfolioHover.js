$('.portfolioContent').hover(
    function () {
        $('.lanParty').addClass('lanHover');
    },
    function () {
        setTimeout(function () {
            $('.lanParty').removeClass('lanHover');
        }, 300);
    }
);

$('.contactSubLogo').click(function () {
    $(this).addClass('contactLogoSpin');
    setTimeout(function () {
        $('.contactSubLogo').removeClass('contactLogoSpin');
    }, 500);
})
