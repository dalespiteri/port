$(".more").click(function() {
    var $this = $(this);
   $this.prev('div').toggleClass("expanded");

    if ($this.prev('div').hasClass("expanded")) {
        $this.html("less <i class='fa fa-minus'></i>");
    } else {
        $this.html("read more <i class='fa fa-plus'></i>");
    }
});
