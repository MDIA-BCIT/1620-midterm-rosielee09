/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/


// My Logic to function
// 1. function name: passwordCheck
// 2. parameters: password, userInput
// 3. Conditional
// 1) when password === userInput, 
    // 1-1)if it's less than 5 => password too short
    // 1-2) if it's equal to or greater than 5, shows "Access granted"
// 2) when password !== userInput
        // 2-1) "Access Denied!, This password you set should not be used because it glitches the system."
        // 2-2) once user realize the password not matching, they will put "forgot" 0r "reset" input
                // - adding on forgot - hint / reset- le'ts reset account msg here.
        // 2-3)if it's less than 5 => password too short
        // 2-4) if it's equal to or greater than 5, shows "Access granted"

function passwordCheck(password, userInput){
   if(password === userInput) {
        if(password.length < 5){
            console.log("Your password is too short!");
        } else  {
            console.log("Access Granted!");
        }
   

} else if( password !== userInput && password.length >= 5){
    console.log("Access Denied!, This password you set should not be used because it glitches the system, Push either forgot or reset button?");
    
        if(userInput === "forgot") {
            console.log(" Here is a hint")
        } else if(userInput ==="reset"){
            console.log("Let's reset your account");
        }
   
   } 

   else if( password !== userInput && password.length < 5){
    console.log("Access Denied and Your password is too short! This password you set should not be used because it glitches the system. Push either forgot or reset button?");
    
        if(userInput === "forgot") {
            console.log("Here is a hint")
        } else if(userInput ==="reset"){
            console.log("Let's reset your account");
        }
   
   } 

}

// Test Result
// 1.when password is matching
// passwordCheck("432532532", "432532532");
// passwordCheck("4322", "4322");

// 2.when password is not matching 
// passwordCheck("4325", "4325432");
// passwordCheck("432532532", "432532539");

// 3.when user realized and put either forgot or reset input
// passwordCheck("4325", "forgot");
// passwordCheck("432432432","forgot");
// passwordCheck("432432432","reset");
