

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD6ouLs4NdKN_BNwJmPA9p9XgOsy29r--4",
    authDomain: "fir-authentication-2141e.firebaseapp.com",
    projectId: "fir-authentication-2141e",
    storageBucket: "fir-authentication-2141e.firebasestorage.app",
    messagingSenderId: "36830148797",
    appId: "1:36830148797:web:7c3e66c9e3ed8926045fd4",
    measurementId: "G-DH06WSY1XP"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
