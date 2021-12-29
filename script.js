// about section tab navigation
const tabNavigationElements = document.querySelectorAll(".tabs .tab-navigation li");
const tabContentElements = document.querySelectorAll(".tabs .tab-content");

function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}

for (let tabElement of tabNavigationElements) {
   tabElement.addEventListener("click", function() {
    const target = this.dataset.target;

    removeActiveClassesFromElements(tabNavigationElements);
       this.classList.add("active");

       removeActiveClassesFromElements(tabContentElements);
       document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
    });
}

//swiper gallery

const swiper = new Swiper('.reviews-swiper', {
    // Optional parameters
    speed: 800,
    slidesPerView: 1,
    slidesPerGroup: 3,
    autoHeight: true,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 2000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetween: 120,

        }
    }
 });


