const myArray = []
let sum = 0;

while (sum < 50 ) {
  let elToInsert = parseInt(prompt("Inserisci un numero nell'array"));

  myArray.push(elToInsert)

  sum += elToInsert;
  console.log(elToInsert, myArray, sum);
}