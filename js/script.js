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

// stretched-link
function redirectTo(url) {
    window.location.href = url
}

// waifu
const waifu = document.getElementById('waifu')
const waifuList = [
    'MifuneShioriko',
    'YukiSetsuna',
    'NakanoItsuki',
    // 'FuruhashiFumino',
    'Pareo',
]
const random = Math.floor(Math.random() * waifuList.length)

waifu.innerHTML = waifuList[random]

// greeting
const greeting = document.getElementById('greeting')
const hour = new Date().getHours()

if(hour >= 18 || hour < 5) {
    greeting.innerHTML = 'Konbanwa!'
} else if(hour >= 11) {
    greeting.innerHTML = 'Konnichiwa!'
} else if(hour >= 5) {
    greeting.innerHTML = 'Ohayou gozaimasu!'
} else {
    greeting.innerHTML = 'Error desu.'
}