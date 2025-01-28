console.log("hellow js");



import { signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider , GithubAuthProvider }  from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


import { auth } from "./config.js";
const provider = new GoogleAuthProvider();
const provider1 = new GithubAuthProvider();



const email = document.querySelector("#email")
const password = document.querySelector("#password")
const btn = document.querySelector("#btn");
const googlebtn = document.querySelector("#google-btn")
const githubbtn = document.querySelector("#github-btn")





btn.addEventListener("click",(e)=>{
    e.preventDefault()


    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed in 
    const user = userCredential.user;
    console.log(user);
    // alert("SucessFull Work")
    if(user.emailVerified === false){
      console.log("false");
      alert("please Verified Email ")
      
  } else if (user.emailVerified === true){
      console.log(user.uid);

      console.log(user.emailVerified);
      window.location = "index.html"
      alert("Your email has been verified")
  } 
    // window.location = "index.html"
    
    // ...
  })
  .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
      console.log(errorMessage);
      
    });
})


//                            <!-- google btn -->


googlebtn.addEventListener("click",()=>{
    console.log("hellow js");
    
    
    signInWithPopup(auth, provider)
    .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    console.log(user);
    alert("Sucess Full")
    console.log("googlebtn");
    
    window.location ="index.html"
    


}).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
});
})


//                            <!-- github btn -->


githubbtn.addEventListener("click",()=>{
    console.log("hellow js");
    
    
    
    signInWithPopup(auth, provider1)
  .then((result) => {
      
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    alert("Sucess Full")
    console.log("github button ");
    
    window.location ="index.html"
    

  }).catch((error) => {
      
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    
});
})