const numberofArrays = parseInt(prompt("Inserisci un numero:"));

for (let i = 0; i < numberofArrays; i++) {
  let randomArray = [];
  
  for (let j = 0; j < 10; j++) {
    let randomNumber = Math.ceil((Math.random() * 100) + 1)
    
    randomArray.push(randomNumber)
    console.log(randomArray);
  }
}