function menuShow() {
    let menuMobile = document.querySelector('.icone_menu_mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/icone_menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/x_icone.svg";
    }
}