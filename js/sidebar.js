'use strict';

import { api_key, fetchDataFromServer } from "../js/api.js";

export function sidebar(){
    const genreList = {};

    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({genres}) {
        for(const {id, name} of genres){
            genreList[id] = name;
        }

        genreLink();

    });


    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");

    sidebarInner.innerHTML = `
    
        <div class="sidebar-list">
            
            <p class="title">Genre</p>
            
        </div>

        <div class="sidebar-list">
            <p class="title">Language</p>
            <a href="../php/movie-list.php" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=en", "English")'> English </a>

            <a href="../php/movie-list.php" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=es", "Spanish")'> Spanish </a>
            
        </div>

        <div class="sidebar-footer">
            <p class="copyright">
                Copyright 2023 
            </p>
            <img src="../img/tmbd-logo.png" width="130" height="17" alt="the movie database logo">
        </div>
    
    ` ;
    
    function genreLink(){
        for(const [genreId, genreName] of Object.entries(genreList)) {

            const link = document.createElement("a");
            link.classList.add("sidebar-link");
            link.setAttribute("href", "../php/movie-list.php");
            link.setAttribute("menu-close", "");
            link.setAttribute("onclick", `getMovieList("with_genres=${genreId}", "${genreName}")`);
            link.textContent = genreName;

            sidebarInner.querySelectorAll(".sidebar-list")[0].appendChild(link);

        }

        const sidebar = document.querySelector("[sidebar]");
        sidebar.appendChild(sidebarInner);
        toggleSidebar(sidebar);

    }

    function toggleSidebar(sidebar) {
        /* el toggle sidebar en dispositivo movil */
        const sidebarBtn = document.querySelector("[menu-btn]");
        const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
        const sidebarClose = document.querySelectorAll("[menu-close]");
        const overlay = document.querySelector("[overlay]");

        addEventOnElements(sidebarTogglers, "click", function (){
            sidebar.classList.toggle("active");
            sidebarBtn.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        addEventOnElements(sidebarClose, "click", function (){
            sidebar.classList.remove("active");
            sidebarBtn.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

}