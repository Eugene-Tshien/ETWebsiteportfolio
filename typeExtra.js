var i = 0;
var txt = 'EXTRAORDINAIRE!';
var speed = 85;

window.onload = function () { typeWriter() };

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("extra").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}