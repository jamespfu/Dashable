// Initialize Firebase
var config = {
  apiKey: "AIzaSyDoCeUFRrGRT6Bw0Tsoiag4mFcZrg1Mq8g",
  authDomain: "serveon-f54f2.firebaseapp.com",
  databaseURL: "https://serveon-f54f2.firebaseio.com",
  projectId: "serveon-f54f2",
  storageBucket: "serveon-f54f2.appspot.com",
  messagingSenderId: "89720750647"
};

firebase.initializeApp(config);

// Gather Firebase Storage
gsutil -m acl ch -r -u firebase-storage@system.gserviceaccount.com:O gs:serveon-f54f2.appspot.com

function addPhoto() {
    eventname = $("#eventname")[0].value
    photo = $("#photo")[0].value
    // Scrappy code fix below; basically sends an alert if any input fields are blank. BUT ISN'T THE required="true" THING SUPPOSED TO DO IT?
    if (first === "" || last === "" || email === "" || password === "" || username === "" || age === "Age") {
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
    }
    else {
      var userInfo = firebase.database().ref('users/' + username);
  
      firebase.database().ref('users/' + "/" + username).set({
         name:name,
         email:email,
         password:password,
         username:username,
         age:age
       });
      loadingPage();
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }
  }