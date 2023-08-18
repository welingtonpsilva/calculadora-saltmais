const valor = document.getElementById('ivalor')
const tx = document.getElementById('itaxa')
const prazo = document.getElementById('iprazo')
const tx2 = document.getElementById('itaxa2')

const bCalcular = document.getElementById('ibutton1')
const bLimpar = document.getElementById('ibutton2')

const result = document.getElementById('iresult')


bCalcular.addEventListener('click', calcular)
function calcular(){
const calculo = (tx2.value * valor.value)/100
const calcreal = calculo.toFixed(2)
result.innerHTML = (`Seu contrato remunerou R$ ${calcreal}`)

}
bLimpar.addEventListener('click', limpar)
function limpar(){
    valor.value = undefined
    tx.value = undefined
    prazo.value = undefined
    tx2.value = undefined
    result.innerHTML = (`<p>Apagado!</p>`)
}