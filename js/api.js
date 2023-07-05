'use strict';

const api_key = 'a9b471163f8ca4b162d6f609471e2429';
const imageBaseUrl = 'http://image.tmdb.org/t/p/';

/* usando fecth para extraer los datos de la url */

const fetchDataFromServer = function(url, callback, optionalParam){
    fetch(url).then(response => response.json()).then(data => callback(data, optionalParam));
}

export { imageBaseUrl, api_key, fetchDataFromServer };