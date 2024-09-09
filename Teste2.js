function verificarLetraA(str) {
    // Variável para contar quantas vezes a letra 'a' ou 'A' aparece
    let contador = 0;

    // Percorre a string e verifica se há 'a' ou 'A'
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            contador++;
        }
    }

    // Verifica se a letra 'a' apareceu e retorna a mensagem
    if (contador > 0) {
        console.log(`A letra 'a' aparece ${contador} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// Defina a string a ser verificada
let texto = prompt("Informe uma string:");
 // Você pode alterar essa string

// Chama a função para verificar a letra 'a'
verificarLetraA(texto);
