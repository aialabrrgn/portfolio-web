// carrusel fresh
// puntos del carrusel
function moverCarrusel(numeroSlide) {
    const slides = document.querySelectorAll(".fresh__cont")
    slides.forEach(slide => slide.style.transform = `translateY(-${numeroSlide}00%)`)

}

const punto1 = document.querySelector(".carrusel__pt1")
const punto2 = document.querySelector(".carrusel__pt2")
const punto3 = document.querySelector(".carrusel__pt3")
const punto4 = document.querySelector(".carrusel__pt4")
console.log(punto3)

punto1.addEventListener("click", () => {
    moverCarrusel(0)
})
punto2.addEventListener("click", () => {
    moverCarrusel(1)
})
punto3.addEventListener("click", () => {
    moverCarrusel(2)
})
punto4.addEventListener("click", () => {
    moverCarrusel(3)
})

const pt= document.querySelector(".carrusel__pt")
const pt1= document.querySelector(".carrusel__pt1")
const pt2= document.querySelector(".carrusel__pt2")
const pt3= document.querySelector(".carrusel__pt3")
const pt4= document.querySelector(".carrusel__pt4")


// pt1
pt1.addEventListener("click", () => {
    pt1.classList.add('carrusel__pt-activado');
});

pt1.addEventListener("click", () => {
    pt1.classList.remove('.carrusel__pt-activado');
});

// pt2
pt2.addEventListener("click", () => {
    pt2.classList.add('carrusel__pt-activado');
});

pt2.addEventListener("click", () => {
    pt1.classList.remove('.carrusel__pt-activado');
});

// pt3
pt3.addEventListener("click", () => {
    pt3.classList.add('carrusel__pt-activado');
});

pt3.addEventListener("click", () => {
    pt1.classList.remove('.carrusel__pt-activado');
});


// pt4
pt4.addEventListener("click", () => {
    pt4.classList.add('carrusel__pt-activado');
});

pt4.addEventListener("click", () => {
    pt1.classList.remove('.carrusel__pt-activado');
});