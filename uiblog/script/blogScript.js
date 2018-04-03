window.onscroll = () => {
  const nav = document.querySelector('.header');
  if(this.scrollY <= 125) nav.className = 'header'; else nav.className = 'header scrolledHeader';
};
