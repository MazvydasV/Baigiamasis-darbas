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


