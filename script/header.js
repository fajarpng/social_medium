const header = document.querySelector('header') // hader tag
const navToggle = document.querySelector('.nav-mobile #navToggle') // nav toggle id
const navToggleBars = document.querySelectorAll('.nav-mobile #navToggle .bar') // nav toggle bar classes
const navMenus = document.querySelectorAll('.nav-mobile #navMenu ul li') // nav menu list

let isNabarOpen = false
let lastScrollTop = 0;

// dosable scroll
function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

// dosable scroll
function enableScroll() {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

// handle navbar visibility
const handleNavbarVisibilityChange = () => {
  header.classList.toggle("open")
  if (isNabarOpen) {
    enableScroll()
    // turn the toogle bar to burger shape / three bar icon
    navToggleBars[0].style.transform = "rotate(0) translateY(0)";
    navToggleBars[2].style.transform = "rotate(0) translateY(0)";
    navToggleBars[1].style.opacity = "1";
  } else {
    disableScroll()
    header.style.backgroundColor = '#fff'
    // turn the toogle bar to X shape / close icon
    navToggleBars[0].style.transform = "rotate(45deg) translateY(15px)";
    navToggleBars[2].style.transform = "rotate(-45deg) translateY(-15px)";
    navToggleBars[1].style.opacity = "0";
  }
  isNabarOpen = !isNabarOpen
}

// handle for click navigation toogle bar
navToggle.addEventListener('click', handleNavbarVisibilityChange)
// handle for click navigation menus
navMenus.forEach(e => e.addEventListener('click', () => {
  handleNavbarVisibilityChange()
  header.style.transform = 'translateY(-100%)'; // hide the header navbar
}))

// handle for navbar background change on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    header.style.backgroundColor = 'rgba(255,255,255,.8)' // set background color
  } else {
    header.style.backgroundColor = 'transparent' // remove background color
  }
})

// handle for navbar visibility change on scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        header.style.transform = 'translateY(-100%)'; // hide the header navbar
    } else {
        header.style.transform = 'translateY(0)'; // show the header navbar
    }

    lastScrollTop = scrollTop;
})