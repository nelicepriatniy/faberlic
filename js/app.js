// front slider

const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 1,
  initialSlide: 1,
  navigation: {
    nextEl: '.front-slider-next',
    prevEl: '.front-slider-prev'
  }
});

//video block start

const videoBlock = document.querySelector('.video-blcok');

if(videoBlock) {
  const videoStart = videoBlock.querySelector('.video-start');
  const videoElement = videoBlock.querySelector('.video-block-video');
  videoStart.onclick = ()=>{
    videoBlock.classList.add('active')
    videoElement.setAttribute('controls', true)
    videoElement.play()
  }
}

//haeder menu

if(window.innerWidth < 1200) {
  const headerBurger = document.querySelector('.header-burger');
  const closeHeaderBtns = document.querySelectorAll('.close-header-btn')
  const headerMenu = document.querySelector('.burger-menu')
  if(headerBurger) {
    headerBurger.onclick = ()=>{
      if(headerMenu.classList.contains('active')) {
        headerBurger.classList.remove('active')
      } else if(!headerMenu.classList.contains('active')) {
        headerBurger.classList.add('active')
      } else {
        console.log('что то не так');
        
      }
      headerMenu.classList.toggle('active');
    }
  }
  if(closeHeaderBtns.length > 0) {
    for(let i = 0; closeHeaderBtns.length > i; i++) {
      closeHeaderBtns[i].onclick = ()=>{
        headerBurger.classList.remove('active')
        headerMenu.classList.remove('active')
        console.log(123);
        

      }
    }
  }
}