console.log("hellow ");

import { createUserWithEmailAndPassword,sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


import { auth } from "./config.js";




const email = document.querySelector("#email")
const password = document.querySelector("#password")
const btn = document.querySelector("#btn");



btn.addEventListener("click",(e)=>{
    e.preventDefault()    
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // alert("sucessfull")
         // verification Email
       sendEmailVerification(auth.currentUser)
       .then(() => {
           alert("Email verification sent! please check ")
       console.log("Email verification sent! please check ");


 })  .catch((error) => {
   console.error('Error signing up: ', error);
   
 })
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage)
        
        // ..
    });
    
})