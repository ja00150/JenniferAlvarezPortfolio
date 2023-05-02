/*  
Author: Jennifer Alvarez 
File Name: script.js
Date: 04/29/2023
*/

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
                menuicon.style.color = "#008B8B";
        } else {
            navlinks.style.display = "block";
                menuicon.style.color = "#F0F8FF";
        }
}
