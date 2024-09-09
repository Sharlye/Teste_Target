function isFibonacci(num) {
    // Primeiros valores da sequência de Fibonacci
    let a = 0;
    let b = 1;
    
    // Caso o número seja 0 ou 1, ele pertence à sequência de Fibonacci
    if (num === 0 || num === 1) {
        return true;
    }

    // Gera a sequência de Fibonacci até encontrar o número ou um valor maior
    let nextFib = a + b;
    while (nextFib <= num) {
        if (nextFib === num) {
            return true;
        }
        a = b;
        b = nextFib;
        nextFib = a + b;
    }

    // Se o loop termina e o número não foi encontrado, ele não pertence à sequência
    return false;
}

// Defina o número a ser verificado
let number = parseInt(prompt("Informe um número:"));

// Verifica se o número pertence à sequência de Fibonacci e exibe a mensagem
if (isFibonacci(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}
