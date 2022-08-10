 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyABfbFUIWlyZFyGrpzjTaMeW4j5EMoT0gQ",
   authDomain: "profile-one2k22-b48ef.firebaseapp.com",
   databaseURL: "https://profile-one2k22-b48ef-default-rtdb.firebaseio.com",
   projectId: "profile-one2k22-b48ef",
   storageBucket: "profile-one2k22-b48ef.appspot.com",
   messagingSenderId: "975030133703",
   appId: "1:975030133703:web:1afe47923735274a42efe2",
   measurementId: "G-0NP09EH092"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 //const analytics = getAnalytics(app);
 const auth = getAuth(app);
//signup  new user
 document.getElementById("Register").addEventListener("click",function(){
    const names = document.getElementById("name").value
    const emails = document.getElementById("email_s").value
    const passwords = document.getElementById("password_s").value

    createUserWithEmailAndPassword(auth, emails, passwords)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      document.getElementById("indicate").innerHTML="New User added Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorCode + errorMessage);
    });
 })
// sign in user

document.getElementById("Login").addEventListener("click",function(){
 const emaill = document.getElementById("email_l").value
  const passwordl = document.getElementById("password_l").value

  signInWithEmailAndPassword(auth, emaill, passwordl)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href="https://www.instagram.com/being_faizan007/";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + errorMessage);
  });
})


