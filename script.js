let numero = 0

function diminuir() {
    numero = numero - 1
    console.log('add')
    mostrarnatela()
    
}
function aumentar() {
    numero = numero +1
    console.log('add')
    mostrarnatela()
}
function zerar(){
    numero= 0
    console.log('add')
    mostrarnatela()
}
function mostrarnatela(){
    const p = document.querySelector("#resultado", "#resultado1")
    p.innerText=numero
}
mostrarnatela()

