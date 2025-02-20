function inverterString(str) {
    return str.split('').reverse().join('');
}

const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida); // Saída: !odnum ,álO