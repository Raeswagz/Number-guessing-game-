//prompt for username
const username = prompt ("What is your name?");

//welcome user
console.log(`Welcome ${username}!`);

//Get variables to be placed outside the for loop
let points = 0;
let levels = 1;

//for statement
for (let i = 2; i < 8;) {
 // console.log(i)
  const randomNum = Math.floor(Math.random() * i) + 1;
  

  const userGuess = parseInt(prompt (`Please enter a number between 1 and ${i}`));
 if (userGuess === randomNum) {
    points ++;
    levels++;
    i++
    console.log(`Nice guess!!! You have ${points} points. Welcome to level ${levels}`) 
}  
  else if (userGuess < randomNum) {console.log("Go a little higher.")
}
  else if (userGuess > randomNum) {
   console.log("Go a little lower.")
  } 
  else{
    console.log("Please enter a number...")
  }

}








