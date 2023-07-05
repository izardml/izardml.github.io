// toggle navbar-nav
const navbarNav = document.querySelector('.navbar .navbar-nav')

document.querySelector('#menu').onclick = (e) => {
    navbarNav.classList.toggle('active')
    e.preventDefault()
}

// click any to close
const menu = document.querySelector('#menu')

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})