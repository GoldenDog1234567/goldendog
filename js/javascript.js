function bounceImage() {
    var image = document.getElementById("myImage0");
    image.classList.add("bounce");

    setTimeout(function () {
        image.classList.remove("bounce");
    }, 1000);
}
function bounceImage1() {
    var image = document.getElementById("myImage1");
    image.classList.add("bounce");

    setTimeout(function () {
        image.classList.remove("bounce");
    }, 1000);
}
function bounceImage2() {
    var image = document.getElementById("myImage2");
    image.classList.add("bounce");

    setTimeout(function () {
        image.classList.remove("bounce");
    }, 1000);
}
function bounceImage3() {
    var image = document.getElementById("myImage3");
    image.classList.add("bounce");

    setTimeout(function () {
        image.classList.remove("bounce");
    }, 1000);
}
function bounceImage1fix() {
    var image = document.getElementById("image1fix");
    image.classList.add("bounce");

    setTimeout(function () {
        image.classList.remove("bounce");
    }, 1000);
}
function bounceLOGO() {
    var image = document.getElementById("LOGO");
    image.classList.add("bounce");

    setTimeout(function () {
        image.classList.remove("bounce");
    }, 1000);
}
function applyRandomAnimation(element) {
    const animations = ['logoRotate','bounceAnimation','breathe','shakeAndBreathe'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.animation-container {  
animation-name: ${randomAnimation};  
animation-duration: 1s;
animation-iteration-count: 1;
}`;
    document.head.appendChild(style);
    if (!element.classList.contains('animation-container')) {
        element.classList.add('animation-container');
    }
    element.addEventListener('animationend', function () {
        element.classList.remove('animation-container');
    }, { once: true });
}