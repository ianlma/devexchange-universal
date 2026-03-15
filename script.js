const amountInput = document.getElementById('amountInput');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const resultText = document.getElementById('resultText');
const fromSymbolSpan = document.getElementById('fromSymbol');
const toSymbolSpan = document.getElementById('toSymbol');

function converter() {
    const valor = parseFloat(amountInput.value);
    const taxaOrigem = parseFloat(fromCurrency.value);
    const taxaDestino = parseFloat(toCurrency.value);
    const simboloOrigem = fromCurrency.options[fromCurrency.selectedIndex].getAttribute('data-symbol');
    const simboloDestino = toCurrency.options[toCurrency.selectedIndex].getAttribute('data-symbol');

    fromSymbolSpan.textContent = simboloOrigem;
    toSymbolSpan.textContent = simboloDestino;

    if (valor > 0) {
        const resultado = (valor / taxaOrigem) * taxaDestino;
        
        resultText.textContent = resultado.toLocaleString('pt-BR', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    } else {
        resultText.textContent = "0,00";
    }
}

amountInput.addEventListener('input', converter);
fromCurrency.addEventListener('change', converter);
toCurrency.addEventListener('change', converter);