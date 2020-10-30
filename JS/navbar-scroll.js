const nav = document.querySelector('.navbar');
const navButtons = document.querySelector('.nav-button-container');

window.addEventListener("scroll", function(event){
    var scrolling = this.scrollY;

    if (scrolling > 0) {
        nav.style.setProperty('box-shadow', '0px 2px 2px black');
        navButtons.style.setProperty('box-shadow', '0px 2px 2px black');
    }
    else {
        nav.style.setProperty('box-shadow', '0px 0px 0px black');
        navButtons.style.setProperty('box-shadow', '0px 0px 0px black');
    }
});