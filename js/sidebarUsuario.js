'use strict';

import { api_key, fetchDataFromServer } from "../js/api.js";

export function sidebarUser(){
    const genreList = {};

    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({genres}) {
        for(const {id, name} of genres){
            genreList[id] = name;
        }

        genreLink();

    });


    const sidebarInnerUser = document.createElement("div");
    sidebarInnerUser.classList.add("sidebarUser-inner");

    sidebarInnerUser.innerHTML = `
    
        <div class="sidebarUser-list">
            
            <p class="title">Genre</p>
            
        </div>

        <div class="sidebarUser-list">
            <p class="title">Language</p>
            <a href="../php/movie-list.php" perfil-close class="sidebarUser-link" onclick='getMovieList("with_original_language=en", "English")'> English </a>

            <a href="../php/movie-list.php" perfil-close class="sidebarUser-link" onclick='getMovieList("with_original_language=es", "Spanish")'> Spanish </a>
            
        </div>
    
    ` ;
    
    function genreLink(){
        for(const [genreId, genreName] of Object.entries(genreList)) {

            const link = document.createElement("a");
            link.classList.add("sidebarUser-link");
            link.setAttribute("href", "../php/movie-list.php");
            link.setAttribute("perfil-close", "");
            link.setAttribute("onclick", `getMovieList("with_genres=${genreId}", "${genreName}")`);
            link.textContent = genreName;

            sidebarInnerUser.querySelectorAll(".sidebarUser-list")[0].appendChild(link);

        }

        const sidebarUser = document.querySelector("[sidebarUser]");
        sidebarUser.appendChild(sidebarInnerUser);
        toggleSidebar(sidebarUser);

    }

    function toggleSidebar(sidebarUser) {
        /* el toggle sidebar en dispositivo movil */
        const sidebarBtnUser = document.querySelector("[perfil-btn]");
        const sidebarTogglersUser = document.querySelectorAll("[perfil-toggler]");
        const sidebarCloseUser = document.querySelectorAll("[perfil-close]");
        const overlay = document.querySelector("[overlay]");

        addEventOnElements(sidebarTogglersUser, "click", function (){
            sidebarUser.classList.toggle("active");
            sidebarBtnUser.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        addEventOnElements(sidebarCloseUser, "click", function (){
            sidebarUser.classList.remove("active");
            sidebarBtnUser.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

}