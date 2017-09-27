// hover effects on the portfolio page

$('.portfolio-content').hover(
    
    // have the whole page trigger the hover effects
    
    function () {
        $('.lan-party').addClass('lanHover');
        
        // the lanHover class adds margins to the middle portfolio items to spread them apart and remove the overlapping effect without effecting the top position on the page
        
    },
    function () {
        
            $('.lan-party').removeClass('lanHover');
            
            // remove the hover class
    }
);