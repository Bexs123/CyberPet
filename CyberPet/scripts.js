const interactionButtons = document.getElementById("interactionButtons")
const animalButtons = document.getElementById("animalButtons")
const dogButton = document.getElementById("dogButton")
const catButton = document.getElementById("catButton")
const rabbitButton = document.getElementById("rabbitButton")
const dogInter = document.getElementById("dogInteractions")
const catInter = document.getElementById("catInteractions")
const rabbitInter = document.getElementById("rabbitInteractions")
const stats = document.getElementById("stats")

// dogButton.addEventListener("click", () =>{
//     animalButtons.style.display = "none";
//     interactionButtons.style.display = "block";
// })



dogButton.addEventListener("click", () =>{
    animalButtons.style.display = "none"
    dogInter.style.display = "block"
    interactionButtons.style.display = "block"
    stats.style.display = "block"
})

catButton.addEventListener("click", () =>{
    animalButtons.style.display = "none"
    catInter.style.display = "block"
    interactionButtons.style.display = "block"
    stats.style.display = "block"
})

rabbitButton.addEventListener("click", () =>{
    animalButtons.style.display = "none"
    rabbitInter.style.display = "block"
    interactionButtons.style.display = "block"
    stats.style.display = "block"
})
