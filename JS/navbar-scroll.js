const nav = document.querySelector('.navbar');

window.addEventListener("scroll", function(event){
    var scrolling = this.scrollY;

    if (scrolling > 0) {
        nav.style.setProperty('box-shadow', '0px 3px 5px black');
    }
    else {
        nav.style.setProperty('box-shadow', '0px 0px 0px black');
    }
});