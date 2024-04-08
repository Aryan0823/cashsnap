const firebaseConfig = {
  apiKey: "AIzaSyBncdnP33SF5gVSACcn2DI7DMZ-eIF3hj4",
  authDomain: "cashsnap-9a185.firebaseapp.com",
  databaseURL: "https://cashsnap-9a185-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cashsnap-9a185",
  storageBucket: "cashsnap-9a185.appspot.com",
  messagingSenderId: "1046320871049",
  appId: "1:1046320871049:web:600b3dee8af7b3c4763858",
 
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
