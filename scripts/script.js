var bgwaves = document.getElementById("background");
var button = document.getElementById("animateLogo");

//background vector design anime.js morphing animation
bgwaves.onmouseover = function () {
    var bgmorphing = anime({
        targets: '#background > path',
        fill: [
            { value: '#00CBA9' }
        ],
        d: [
            { value: 'M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z' }
        ],
        easing: 'easeOutQuad',
        duration: 400,
        loop: false
    });
}

//background vector animation revert
bgwaves.onmouseout = function () {
    var bgmorphing = anime({
        targets: '#background > path',
        fill: [
            { value: '#0099FF' }
        ],
        d: [
            { value: 'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z' }
        ],
        easing: 'easeOutQuad',
        duration: 400,
        loop: false
    });
}

//button highlight on mouseover
button.onmouseover = function () {
    this.style.backgroundColor = '#FF9966';
}
button.onmouseout = function () {
    this.style.backgroundColor = '#FF5500';
}

//logo stroke draw animation triggered by button
var logoanimate = anime({
    targets: '.logoPath > path',
    strokeDasharray: [anime.setDasharray, 50],
    fill: [
        { value: 'rgba(255,255,255, 0)' }
    ],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true,
    autoplay: false
})

//if logo animation is not playing, start animation
//else pause the animation
function animatePlayHandler() {
    if (logoanimate.paused) {
        logoanimate.play();
    } else {
        logoanimate.pause();
    }
}