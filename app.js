let header = document.querySelector('header');
//scroll indicator function
let scroll_indi = () => {
    let win_scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (win_scroll/height) *100;
    document.querySelector('.scroll-indicator-bar').style.width = scrolled +'%';
}

//event listener
window.addEventListener('scroll', () => {
    let header_height = header.getBoundingClientRect().height;
    let scroll_height = window.scrollY;
    if (scroll_height > header_height) {
        header.classList.add('nav-fixed');
    }
    else {
        header.classList.remove('nav-fixed');
    }
    scroll_indi();
});

