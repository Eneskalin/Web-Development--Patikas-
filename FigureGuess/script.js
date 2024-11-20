let counter = 0;
const random = Math.floor(Math.random() * 10);
console.log(random);

const maxAttempts = 6;
const guesses = [];

function getnum() {
    const num = parseInt(document.getElementById("inputNumber").value);
    if (!isNaN(num) && counter < maxAttempts) {
        guesses[counter] = num;
        document.getElementById(`g${counter + 1}`).innerHTML = num;
        const id = document.getElementById(`i${counter + 1}`);

        if (random === num) {
            id.className = "bi bi-trophy-fill";
        } else if (random > num) {
            id.className = "bi bi-arrow-up-square-fill";

        } else {
            id.className = "bi bi-arrow-down-square-fill";

        }

        counter++;
    } else if (counter >= maxAttempts) {
        alert(`Tahmin hakkınız bitti. Doğru sayı: ${random}`);
    } else {
        alert("Lütfen geçerli bir sayı girin.");
    }
}
