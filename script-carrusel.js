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

