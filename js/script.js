let captions = document.getElementsByClassName("caption");
let reveals = document.getElementsByClassName("reveal");

function onScroll() {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let pageHeight = document.body.scrollHeight - windowHeight;

    // progress bar
    let percent = (scrollTop / pageHeight) * 100;
    document.getElementById("progress").style.width = percent + "%";

    // altitude goes from 850 m to 2400 m
    let altitude = Math.round(850 + (scrollTop / pageHeight) * 1550);
    document.getElementById("altitude").innerHTML = "Altitude: " + altitude + " m";

    // captions move slower than the page and fade out (parallax)
    for (let i = 0; i < captions.length; i++) {
        let section = captions[i].parentElement;
        let distance = scrollTop - section.offsetTop;

        captions[i].style.transform = "translateY(" + distance * 0.5 + "px)";
        captions[i].style.opacity = 1 - Math.abs(distance) / windowHeight;
    }

    // show the text blocks when they come on screen
    for (let i = 0; i < reveals.length; i++) {
        if (reveals[i].offsetTop < scrollTop + windowHeight - 100) {
            reveals[i].classList.add("show");
        }
    }
}

window.onscroll = onScroll;
onScroll();
