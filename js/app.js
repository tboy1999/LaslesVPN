$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  // adaptiveHeight: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./img/arrow-left.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./img/arrow-right.svg"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
});

const iconMenu = document.querySelector('.header-menu')
const headerList = document.querySelector('.header-list')
const headerItems = document.querySelectorAll('.header-item')
const close = document.querySelector('.header-list img')

iconMenu.addEventListener('click', () => {
  headerList.classList.add('list-active')
})
close.onclick = () => {
  headerList.classList.remove('list-active')
}

headerItems.forEach(headerItem => {
  headerItem.onclick = () => {
    headerList.classList.remove('list-active')
  }
})
