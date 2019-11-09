function verificar(event){
    event.target.style.color = "red";
    event.target.style.textDecoration = "line-through";
    alert("Uau")
}

let alfabetoFull = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

for(let i = 0; i < alfabetoFull.length; i++){
    document.querySelectorAll('#alfabeto div h4')[i].innerHTML = alfabetoFull[i]; 
}

let palavraInserida = prompt("Escolha uma palavra");
let separado = palavraInserida.split("");
let underLine = "";
let palavra = document.querySelector("#palavra");
let alfabeto = document.querySelectorAll("#alfabeto div");
let c = document.querySelector('#alfabeto div h4').value;


for(let i = 0; i < separado.length; i++){
    underLine += "_ ";
    
}

palavra.innerHTML = underLine;


for(let letra of alfabeto){
    letra.onclick = verificar;
    
}

