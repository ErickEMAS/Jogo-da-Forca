// Functions

function verificar(event){
    if(chances <= 0){
        alert(`Número de tentativas excedido, a palavra era ${palavra}`)
    }else{
        let eventClick = event.target.innerHTML;
        event.target.classList.remove("letra");
        event.target.classList.add("select");
        verificarAcerto(eventClick);
        marcarEscolha()     
    }

    if(palavra.toUpperCase() == underLine.toUpperCase()){
        alert(`Parabéns você acertou a palavra era ${palavra}`)
    }

    document.querySelector("#content-tentativas").innerHTML = `${chances}`;
}

function marcarEscolha(){
    event.target.style.color = corAcerto;
    event.target.style.textDecoration = "line-through";
    console.log(event.target.innerHTML)
}


function verificarAcerto(r){
    corAcerto = "red";

    let acertou = false;
    for(let e = 0; e < separado.length; e++){
    
        if(r.toUpperCase() == separado[e].toUpperCase()){
            underLineArr[e] = r;
            corAcerto = "green";
            acertou = true;
        }
    }

    if(acertou == false){
        chances--;
        erros++
        if(erros == 8){
            alert("Você perdeu, tente novamente, para saber qual era a palavra click em qualquer letra que ainda não foi clicada")
        }else{
            trocarImg();
        }
    }else{
        trocarLetras();
    }
}

function trocarImg(){
    let img = document.querySelector("img");

    img.src = `img/0${erros}.png`;
    
    
}

function trocarLetras(){
    let underLineConvertida = "";

    for(let i = 0; i < underLineArr.length; i++){
        underLineConvertida += underLineArr[i];
    }

    underLine = underLineConvertida;

        palavraForca.innerHTML = underLineConvertida;
}


// Vars

let corAcerto = "red";
let palavra = prompt("Escolha uma palavra").toUpperCase();
let dica = prompt("Dé uma dica sobre essa palavra").toUpperCase();
let separado = palavra.split("");
let underLine = "";
let palavraForca = document.querySelector("#palavra");
let alfabeto = document.querySelectorAll("#alfabeto div");
let c = document.querySelector('#alfabeto div h4').value;
let chances = 7;
let erros = 1;

let alfabetoFull = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


//Algoritmo
                           
    document.querySelector("#content-dica").innerHTML = `Dica: ${dica}`;
    document.querySelector("#content-tentativas").innerHTML = `${chances}`;

for(let i = 0; i < alfabetoFull.length; i++){
    document.querySelectorAll('#alfabeto div h4')[i].innerHTML = alfabetoFull[i]; 
}



for(let i = 0; i < separado.length; i++){
    underLine += "_";
}

let underLineArr = underLine.split("");

trocarLetras()

for(let letra of alfabeto){
    letra.onclick = verificar;
}

