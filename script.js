// portadas de proyectos

const tituloCont = document.querySelector(".titulo__proyecto-lettre")
const imgCont = document.querySelector(".proyectos__imgCont")


// tituloCont.addEventListener("mouseover", () => {
//     imgCont.classList.add('proyectos__imgCont-lettre');
// });

// tituloCont.addEventListener("mouseover", () => {
//     imgCont.classList.toggle('proyectos__imgCont-lettre');
// });
// tituloCont.addEventListener("mouseout", () => {
//     imgCont.classList.add('proyectos__imgCont');
// });

tituloCont.addEventListener('mouseenter', () => {
    imgCont.classList.add('proyectos__imgCont-lettre');
});
tituloCont.addEventListener('mouseleave', () => {
    imgCont.classList.remove('proyectos__imgCont-lettre');
});

// const imgCont=document.querySelector(".proyectos__imgCont")



