'use strict';

/*  ADD EVENT IN MULTIPLE ELEMENTS*/

const addEventOnElements = function (elements, eventType, callback) {
    for(const elem of elements) elem.addEventListener(eventType, callback);
}

/* TOGGLE SEARCH BOX IN MOBILE DEVICE || SMALL SCREEN  */

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
    searchBox.classList.toggle("active");
});




/** GUARDANDO EL ID DE LAS PELICULAS EN LOCALSTORAGE CUANDO SE CLIKEA ALGUNA PELIOCULA */

function getMovieDetail(movieId){
    window.localStorage.setItem("movieId", String(movieId));
}



function getMovieList(urlParam, genreName){
    window.localStorage.setItem("urlParam", urlParam);
    window.localStorage.setItem("genreName", genreName);
}