// hover effects on the portfolio page

$('.portfolioContent').hover(
    
    // have the whole page trigger the hover effects
    
    function () {
        $('.lanParty').addClass('lanHover');
        
        // the lanHover class adds margins to the middle portfolio items to spread them apart and remove the overlapping effect without effecting the top position on the page
        
    },
    function () {
        setTimeout(function () {
            $('.lanParty').removeClass('lanHover');
            
            // remove the hover class, but add timeout of 300ms to delay the removal in case of accidental mouse movements outside the page
            
        }, 300);
    }
);