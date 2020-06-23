var link = document.querySelector(".search-button");
var searchForm = document.querySelector(".search");
var dateArrival = document.querySelector(".date-of-arrival");
var dateDeparture = document.querySelector(".date-of-departure");
var adult = searchForm.querySelector(".adult");
var children = searchForm.querySelector(".children");

var isStorageSupport = true;
var adultItems = "";
var ChildrenItems = "";

try {
    adultItems = localStorage.getItem("adult");
} catch (err) {
    isStorageSupport = false;
}

try {
    ChildrenItems = localStorage.getItem("children");
} catch (err) {
    isStorageSupport = false;
} 

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-hide");
    dateArrival.focus();
      if (adultItems) {
        adult.value = adultItems;
        children.focus();
      } 
      if (ChildrenItems) {
        children.value = ChildrenItems;
        adult.focus();
      }
});

searchForm.addEventListener("submit", function (evt) {
    if (!dateArrival.value || !dateDeparture.value) {
      evt.preventDefault();
      searchForm.classList.remove("form-error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("form-error");
    } else { 
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!searchForm.classList.contains("search-hide")) {
      evt.preventDefault();
      searchForm.classList.add("search-hide");
      searchForm.classList.remove("form-error");
    }
  }
});
