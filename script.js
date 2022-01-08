const person = document.getElementById("person");
const fantasma = document.getElementById("fantasma")
const resultsDisplay = document.querySelector(".results");
const button = document.querySelector(".btn");


button.onclick = 

function jump() {
    if (person.classList != "jump") {
        person.classList.add("jump");

        setTimeout(function () {
            person.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () {
    
    let personTop = parseInt(window.getComputedStyle(person).getPropertyValue("top"));
        
    let fantasmaLeft = parseInt(window.getComputedStyle(fantasma).getPropertyValue("left"));

    if (fantasmaLeft <0 && fantasmaLeft > 0 && personTop >= 120) {
        fantasma.style.animation = 'none'
        fantasma.style.display = 'none'
        resultsDisplay.innerHTML = "GAME OVER"

        let reset = document.querySelector('button');
         reset.innerHTML = "Reset";

    } 
},10);

document.addEventListener("keydown", function (event) {
 jump();
});

let elemento = document.querySelector('#results');
		let results = 1;
		
		setInterval(() => elemento.innerHTML = results++, 100);

let Rapido = document.querySelector("block")

    let 