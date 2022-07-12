/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')


// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})


// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
