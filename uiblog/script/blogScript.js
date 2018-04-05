window.onscroll = () => {
  const nav = document.querySelector('.header');
  if(this.scrollY <= 100) nav.className = 'header'; else nav.className = 'header scrolledHeader';
};

$('.blogPost').click(function(){
  $('.expandedImage', this).slideToggle(500);
})
