console.log("hello ")

// start header
// main page only open linkers 
let openLinksMainPage =document.querySelector("header .container nav .icon")
let linksMainPage = document.querySelector("header .container nav ul")
let span = document.querySelector("header .container nav span .span")

openLinksMainPage.onclick = function(){
    if(linksMainPage.classList.contains("open")){
        linksMainPage.classList.remove("open")
        span.classList.remove("open")
    }else{
        linksMainPage.classList.add("open")
        span.classList.add("open")
    }
}
// close linker

// open nav
let openNav = document.querySelector("header .container .categories i")
let nav = document.querySelector("header .categories ul")

openNav.onclick = function(){
    console.log("dsd")
    if(nav.classList.contains("open")){
        nav.classList.remove("open")
        // openLinksMainPage.classList.remove("rotate")
    }else{
        nav.classList.add("open")
        // openLinksMainPage.classList.add("rotate")
    }
}
// close nav

// end header
