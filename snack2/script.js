const oddDiv = document.createElement("div");
const evenDiv = document.createElement("div");
const numbersArray = [2, 1, 2, 1, 3, 5, 6, 8, 2];

oddDiv.classList.add("text-danger");
evenDiv.classList.add("text-success");

document.querySelector(".col-5").append(oddDiv);
document.querySelector(".col-5").append(evenDiv);

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] % 2 === 0) {
    oddDiv.innerHTML += numbersArray[i] + " ";
    console.log(numbersArray[i]);
  } else if (numbersArray[i] % 2 !== 0) {
    evenDiv.innerHTML += numbersArray[i] + " ";
  }
}