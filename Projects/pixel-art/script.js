let penColour = 'black';

function setPenColour(pen) {
    penColour = pen;
}

function setPixelColour(pixel) {
    pixel.style.backgroundColor = penColour;
}

function clearAll() {
    let pixels = document.getElementsByClassName('pixel');
    for (const pixel of pixels) {
        pixel.style.backgroundColor = 'white';
    }
}