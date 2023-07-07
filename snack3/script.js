const numberofArrays = parseInt(prompt("Inserisci un numero:"));

for (let i = 0; i < numberofArrays; i++) {
  let randomArray = [];
  
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.ceil((Math.random() * 100) + 1)
    
    randomArray.push(randomNumber)
    console.log(randomArray)
  }
}