console.log("hellow js");



import { signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider }  from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


import { auth } from "./config.js";
const provider = new GoogleAuthProvider();



const email = document.querySelector("#email")
const password = document.querySelector("#password")
const btn = document.querySelector("#btn");
const googlebtn = document.querySelector("#google-btn")



btn.addEventListener("click",(e)=>{
    e.preventDefault()


    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("SucessFull Work")
    window.location = "index.html"
    
    // ...
  })
  .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
      console.log(errorMessage);
      
    });
})





googlebtn.addEventListener("click",()=>{
    console.log("hellow js");
    
    
    signInWithPopup(auth, provider)
    .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    console.log(user);
    // alert("Sucess Full")
    window.location ="index.html"
    


}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
});
})