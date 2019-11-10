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

        chances--;
    }

    if(palavra == underLine){
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
    for(let e = 0; e < separado.length; e++){
    
        if(r.toUpperCase() == separado[e].toUpperCase()){
            underLineArr[e] = r;
            corAcerto = "green";
            e = separado.length;
        }
    }
    trocarLetras()
}


function trocarLetras(){
    let underLineConvertida = "";

    for(let i = 0; i < underLineArr.length; i++){
        underLineConvertida += underLineArr[i];
    }

    underLine = underLineConvertida;

        palavraForca.innerHTML = underLineConvertida;
}


function escolherPalavra(){
    let palavraDigitada = prompt("Insira uma palavra (sem acentos) para seu adversário adivinhar").toUpperCase();
    let dicaDigitada = prompt("Insira uma dica para ajudar seu adversário").toUpperCase();

    palavra = palavraDigitada;
    dica = dicaDigitada;
}

function sortearPalavra(){
    let palavras = ["Erick", "Pizza", "Felippe", "Professor", "Renata", "Amarelo", "Alex", "Feijão", "Alergia", "Azul", "Cachoro", "Catapora", "Faca", "Roxo", "Pintor", "Jumento", "Panela", "Arroz", "Laranja", "Camiseta", "Calca", "Azeitona", "Cenoura"]
    let dicas = ["Nome", "Alimento", "Nome", "Profissão", "Nome", "Cor", "Nome", "Alimento", "Doença", "Cor", "Animal", "Doença", "Objeto", "Cor", "Profissão", "Animal", "Objeto", "Alimento", "Alimento", "Roupa", "Roupas", "Alimento", "Alimento"]

    let radomNumber = Math.floor(Math.random() * 22);

    palavra = palavras[radomNumber];
    dica = dicas[radomNumber];
}

function separar(){
    separado = palavra.split("");
    chances = separado.length + 1;
}

function definirPalavra(){
    let modo = confirm("Gostaria de sortear uma palavra? (Click em OK) Se estiver jogando com mais uma pessoa click em cancelar e peça que seu adversário insira uma palavra para você adivinhar")

    if(modo = true){
        sortearPalavra()
    }else{
        escolherPalavra()
    }
}


// Vars

let corAcerto = "red";
let palavra;
let dica;
let underLine = "";
let palavraForca = document.querySelector("#palavra");
let alfabeto = document.querySelectorAll("#alfabeto div");
let c = document.querySelector('#alfabeto div h4').value;

let separado;
let chances;

let alfabetoFull = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


//Algoritmo

definirPalavra()
                           
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

