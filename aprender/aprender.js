const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Show active menu whem scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const aboutMenu = document.querySelector('#about-page')
    const jlptMenu = document.querySelector('#jlpt')
    const alfabetoMenu = document.querySelector('#alfabetos')
    const tipsMenu = document.querySelector('#dicas')
    const grammarMenu = document.querySelector('#gramatica')
    const coursesMenu = document.querySelector('#cursos')
    const loginMenu = document.querySelector('#signup')
    const voltarMenu = document.querySelector('#home-page')
    let scrollPos = window.scrollY
    console.log(scrollPos)

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        aboutMenu.classList.add('highlight')
        jlptMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1150) {
        jlptMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        alfabetoMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 7180) {
        alfabetoMenu.classList.add('highlight')
        jlptMenu.classList.remove('highlight')
        tipsMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 15250) {
        tipsMenu.classList.add('highlight')
        alfabetoMenu.classList.remove('highlight')
        grammarMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 20000) {
        grammarMenu.classList.add('highlight')
        tipsMenu.classList.remove('highlight')
        coursesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 30000) {
        coursesMenu.classList.add('highlight')
        grammarMenu.classList.remove('highlight')
        coursesMenu.classList.remove('highlight')
        return
    }
    
 
    if((elem && window.innerWidth < 960 && scrollPos < 600 || elem)) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// close moblie Menu when clicking on menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)