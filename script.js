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


 // fc82080fac29fcc051cb8b24782a3344  mano API key is openweathermap.org  open weather data from API

 const url = "https://api.openweathermap.org/data/2.5/weather?q=Jieznas&units=metric&appid=fc82080fac29fcc051cb8b24782a3344";
 const city ="Jieznas";
 const wheatherElement = document.getElementById("wheater-in-celsius");

 function getCurrentWeather() {
     const http = new XMLHttpRequest();
     http.open("GET", url);
     http.addEventListener('load', function() {
         const response = JSON.parse(http.response);
         const temperature = response.main.temp;

         if (temperature > 0) {
             wheatherElement.innerText = "+" + temperature;
         }
         else {
             wheatherElement.innerText = temperature;
         }
         
     })
     http.send();
 }


 window.addEventListener('load', getCurrentWeather);


