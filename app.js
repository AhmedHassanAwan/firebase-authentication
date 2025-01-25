console.log("hellow js");

import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


import { auth } from "./config.js";


const btn = document.querySelector("#logout")

btn.addEventListener("click",()=>{
    console.log("hellow js");

    signOut(auth).then(() => {
       
        console.log("Sign-out successful.");
        alert("Sign-out successful.")
        window.location = "login.html"
      
    }).catch((error) => {
        console.log(error);
        alert(error)
        
    });
})