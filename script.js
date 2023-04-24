const titilo = document.querySelector('h1')
const localJogo = document.querySelector('section')
const localCorJogo = document.querySelector('.corBase')
const btnInicar = document.querySelector('button')
const contadorPontos = document.querySelector('h2')
let opcoes
let r,g,b = 0
let corCorreta
let corErrada1
let corErrada2
let cont = 0


btnInicar.addEventListener('click', inicarJogo)

function inicarJogo(){
    desativarInicio()
    resetarJogo()
    criarCores()
    exibirJogo()
    checarVitoria()
}

function desativarInicio(){
    btnInicar.disabled = true
}

function exibirJogo(){
    exibirCorTitulo()
    exibirCorBase()
    exibirCores()
}

function criarCores(){
    sortearCorCorreta()
    criarCorErrada1()
    criarCorErrada2()
}

function resetarJogo(){
    localJogo.innerHTML = ''
}

function sortearCorCorreta(){
    r = sortearCor()
    g = sortearCor()
    b = sortearCor()
    corCorreta = `rgb(${r}, ${g}, ${b})`
}

function criarCorErrada1(){
    rE = checarValor(r)
    gE = checarValor(g)
    bE = checarValor(b)
    corErrada1 = `rgb(${rE}, ${gE}, ${bE})`
}

function criarCorErrada2(){
    rE = checarValor(r)
    gE = checarValor(g)
    bE = checarValor(b)
    corErrada2 = `rgb(${rE}, ${gE}, ${bE})`
}

function checarValor(valor){
    if(valor <= 245 && valor >= 10 )valor = valor + Math.floor(Math.random() * (20 + 20) - 20)
    else if(valor <= 245) valor = valor + Math.floor(Math.random() * (20 - 0) + 20)
    else valor = valor - Math.floor(Math.random() * (20 - 0) + 20)
    return valor
}

function exibirCorTitulo(){
    titilo.innerText = corCorreta
}

function exibirCorBase(){
    localCorJogo.style.backgroundColor = corCorreta
}

function exibirCores(){
    let sequencia = Math.floor(Math.random() * (3 - 0) + 1)
    if(sequencia == 1){
        exibirCor(corCorreta)
        exibirCor(corErrada1)
        exibirCor(corErrada2)
    }else if(sequencia == 2){
        exibirCor(corErrada2)
        exibirCor(corCorreta)
        exibirCor(corErrada1)
    }else if(sequencia == 3){
        exibirCor(corErrada2)
        exibirCor(corErrada1)
        exibirCor(corCorreta)
    }
    
}

function checarVitoria(){
    opcoes = document.querySelectorAll('section div')
    console.log(opcoes)
    permitirCheck()
}

function permitirCheck(){
    opcoes.forEach(item => {
        item.addEventListener('click', checarClick)
    })
}

function checarClick(event){
    const valorClicado = event.currentTarget.style.backgroundColor
    if(valorClicado == corCorreta){
        vencedor()
    }else{
        perdedor()
    }
    inicarJogo()
}

function vencedor(){
    cont ++ 
    contadorPontos.innerText = cont
}

function perdedor(){
    cont = 0 
    contadorPontos.innerText = cont
}

function exibirCor(cor){
    let corDiv = document.createElement('div')
    corDiv.style.backgroundColor = cor
    localJogo.appendChild(corDiv)
} 

function sortearCor(){
    return Math.floor(Math.random() * (255 - 0) + 0);
}

