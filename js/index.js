const humberger = document.querySelector('.humberger-menu');
const links = document.querySelector('.ul');

let menuOpen = false;
humberger.addEventListener('click', function(){
 if (!menuOpen) {
    humberger.classList.toggle('open');
    links.style.right = '0';
 } else {
    humberger.classList.remove('open')
links.style.right = '-100%';
}
 menuOpen = !menuOpen;
})
