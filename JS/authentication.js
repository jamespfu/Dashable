(function() {
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDoCeUFRrGRT6Bw0Tsoiag4mFcZrg1Mq8g",
    authDomain: "serveon-f54f2.firebaseapp.com",
    databaseURL: "https://serveon-f54f2.firebaseio.com",
    projectId: "serveon-f54f2",
    storageBucket: "serveon-f54f2.appspot.com",
    messagingSenderId: "89720750647"
  };
  firebase.initializeApp(config);
  
  // Get Elements
  const first = $("#first")[0].value;
  const last = $("#last")[0].value;
  const name = $("#first")[0].value + " " + $("#last")[0].value;
  const txtEmail = $("#signupemail")[0].value;
  const txtPass = $("#signuppassword")[0].value;
  const username = $("#username")[0].value;
  const age = $("#age")[0].value;
  const btnSignUp = $("#signUpBtn")[0].value;
  const btnLogin = $("#logInBtn")[0].value;
  // Still need to add logout functionality
  const btnLogOut = $("logOutBtn")[0].value;
  
  // Add Login Event, Authorize Login
  // Event listener checks for click, and also begins to look for errors
  btnLogin.addEventListener('click', e => {
    // Scrappy code fix below; basically sends an alert if any input fields are blank. BUT ISN'T THE required="true" THING SUPPOSED TO DO IT?
    if (email === "" || password === "") {
      if (email === "") {
        alert("Please enter an email");
        return false;
      }
      else if (password === "") {
        alert("Please enter a password");
        return false;
      }
      else {
        // Gather pass and @
        const email = txtEmail.value;
        const pass = txtPass.value;
        // Authorize firebase, gather methods
        // const auth = firebase.auth();
        // Sign In
        firebase.auth().signInWithEmailAndPassword(email, pass);
        // Error Handler? Not sure if this is how you do it
        promise.catch(e => console.log(e.message));
      }
  }
  
  // Add Signup Event
  btnSignUp.addEventListener('click', e=> {
    if (first === "" || last === "" || txtEmail === "" || txtPass === "" || username === "" || age === "Age") {
      if (first === "") {
        alert("Please enter a first name");
        return false;
      }
      else if (last === "") {
        alert("Please enter a last name");
        return false;
      }
      else if (email === "") {
        alert("Please enter an email");
        return false;
      }
      else if (password === "") {
        alert("Please enter a password");
        return false;
      }
      else if (username === "") {
        alert("Please enter a username");
        return false;
      }
      else if (age === "Age") {
        alert("Please enter your age");
        return false;
      }
      else {
        // Retrieve email and password information
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();
        // Sign in, after creating account NEED TO VERIFY IF EMAIL IS LEGITIMATE AND ENDS WITH @blah blah
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
          .catch(e => console.log(e.message));
        $(document).ready(function () {
          // Handler for .ready() called.
          window.setTimeout(function () {
            window.location.href = "https://preview.c9users.io/jamesnotfu/serveon/ServeOn%20v1/HTML/accountcreated.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io";
            
          }, 5000);
        });
  };
  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('User not logged in')
    }
});