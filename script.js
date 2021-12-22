// about section tab navigation
const tabNavigationElements = document.querySelectorAll(".tabs .tab-navigation li");

function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}

for (let tabElement of tabNavigationElements) {
   tabElement.addEventListener("click", function() {
    removeActiveClassesFromElements(tabNavigationElements);
       this.classList.add("active");
    });
}


