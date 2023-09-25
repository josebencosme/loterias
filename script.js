// Función para generar números aleatorios
function generateNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");
    const resultDiv = document.getElementById("result");

    generateButton.addEventListener("click", function () {
        const randomNumbers = generateNumbers();
        resultDiv.innerHTML = `<p>Tus números de lotería son: ${randomNumbers.join(', ')}</p>`;
    });
});
