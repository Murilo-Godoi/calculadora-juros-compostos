
const investimentoInicial = (capital,taxa,tempo) => {
    return capital*Math.pow((1+taxa),tempo)
}

const aportes = (mensal,taxa,tempo) => {
    return mensal*(Math.pow(1+taxa,tempo)-1)/taxa
}

const calcular = () => {
    const inicial = parseFloat(document.getElementById('valor-inicial').value)
    const mensal = parseFloat(document.getElementById('valor-mensal').value)
    const taxa = parseFloat(document.getElementById('taxa').value)
    const tempo = parseFloat(document.getElementById('periodo').value)
    document.getElementById('resultado').textContent = `R$ ${(investimentoInicial(inicial,taxa,tempo) + aportes(mensal,taxa,tempo)).toFixed(2)}`
}

document.getElementById('calcular').addEventListener('click', calcular)

