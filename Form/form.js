
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD-gXPq2hgQHoS6Ad6lu1yPVjgYMML7GbM",
    authDomain: "profile-one22h8.firebaseapp.com",
    projectId: "profile-one22h8",
    storageBucket: "profile-one22h8.appspot.com",
    messagingSenderId: "29331273059",
    appId: "1:29331273059:web:9a3521313899544b1b0f56",
    measurementId: "G-GGNCC8YLWE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth =  firebase.auth();

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      location.replace("https://profileone.netlify.app/")
    }
  })

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  LogIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    firebase.auth().signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })