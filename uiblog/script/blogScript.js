window.onscroll = () => {
  const nav = document.querySelector('.header');
  if(this.scrollY <= 100) nav.className = 'header'; else nav.className = 'header scrolledHeader';
};

$('.thumb001').click(function(){
  $('.pictureDisplay').toggleClass('pictureDisplayToggle');
  $('.pictureDisplayImage').attr('src', "./images/blogThumbs/UIDailey001.png");
});
