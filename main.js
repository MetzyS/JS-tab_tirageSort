let btnName = document.querySelector("#ajouter_nom");
let btnRandom = document.querySelector('#random');
let nameArray = [];

btnName.addEventListener("click", (e) => {
   nameArray.push(prompt("Ajoutez un Nom", "Ici"));
   console.log(nameArray);
   }
)

btnRandom.addEventListener("click", (e) => {
    let randomName = Math.floor(Math.random()*nameArray.length);
    let result = nameArray[randomName];
    console.log(result);
    }
)