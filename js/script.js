var link = document.querySelector(".search-button");
var searchForm = document.querySelector(".search-form");
var dateArrival = document.querySelector(".date-of-arrival");
var dateDeparture = document.querySelector(".date-of-departure");
var adult = searchForm.querySelector(".adult");
var children = searchForm.querySelector(".children");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("adult");
} catch (err) {
    isStorageSupport = false;
}

try {
    storage = localStorage.getItem("children");
} catch (err) {
    isStorageSupport = false;
} 

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.add("form-open");
     if (storage) {
      adult.value = storage;
      children.value = storage;
      children.focus();
      } else {
        adult.focus();
      }
    dateArrival.focus();
});

searchForm.addEventListener("submit", function (evt) {
    if (!dateArrival.value || !dateDeparture.value) {
        evt.preventDefault();
        searchForm.classList.remove("form-error");
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add("form-error");
        //console.log(searchForm.offsetWidth);
        //console.log(dateArrival.value);
        //console.log(dateDeparture.value);
        //console.log(adult.value);
        //console.log(children.value);
    } else { 
      if (isStorageSupport) {
        localStorage.setItem("adult", adult.value);
        localStorage.setItem("children", children.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    console.log("Удалить");
    searchForm.classList.remove("form-open");
    searchForm.classList.remove("form-error");
    }
});