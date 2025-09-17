
const emojis = [
    "👽",
    "👽",
    "💀",
    "💀",
    "🤡",
    "🤡",
    "🤖",
    "🤖",
    "🐵",
    "🐵",
    "🧟",
    "🧟",
    "🧞‍♂️",
    "🧞‍♂️",
    "🐲",
    "🐲",
];

let cartasAbertas=[];

let embaralhaEmojis = emojis.sort(()=>(Math.random()>0.5 ? 2 : -1));

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = embaralhaEmojis[i];
    box.onclick = clicado;
    document.querySelector(".jogo").appendChild(box);
}

function clicado(){
    if(cartasAbertas.length>=2){
        return
    }

    this.classList.add("cartaAberta");
    cartasAbertas.push(this);

    if(cartasAbertas.length==2){
        document.querySelector(".jogo").style.pointerEvents = "none";
        setTimeout(verificaPar, 500);
    }
}

function verificaPar(){

    if (cartasAbertas.length < 2) {
        document.querySelector(".jogo").style.pointerEvents = "auto";
        return;
    }

    if(cartasAbertas[0].innerHTML === cartasAbertas[1].innerHTML){
        cartasAbertas[0].classList.add("parFeito");
        cartasAbertas[1].classList.add("parFeito");
    }
    else{
        cartasAbertas[0].classList.remove("cartaAberta");
        cartasAbertas[1].classList.remove("cartaAberta");
    }

    cartasAbertas=[];
    document.querySelector(".jogo").style.pointerEvents = "auto";
    if(document.querySelectorAll(".parFeito").length === emojis.length){
        alert("Você venceu!!");
    }
}