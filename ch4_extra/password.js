//Gana Sehaki 04/08/2025
//stock the user input in the password variable
let password = prompt("Ebter your password ?");

//chock for password criteria
if (password.length >= 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/\d/)){
    alert("Success! You've unlocked the secret message.");
    console.log("SECRET MESSAGE: Decryption complete. Welcome, Agent. Your next mission awaits.");
} else {
    alert("Access Denied! Your password doesn't meet the requirements.");
    console.log("Password validation failed...");
}