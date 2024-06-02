import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDZG1cB8Kba8sdQIK9p2l2PD_Q1cF608zE",
    authDomain: "monday-920b5.firebaseapp.com",
    projectId: "monday-920b5",
    storageBucket: "monday-920b5.appspot.com",
    messagingSenderId: "798284628831",
    appId: "1:798284628831:web:05e171207b4cd08af6ecea",
    measurementId: "G-RHT052ZT8J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// index.html and sigup
let btn = document.querySelector('#btn')
if(btn){
    btn.addEventListener('click', () => {
    
        let getEmail = document.querySelector('#getEmail').value
        let getPass = document.querySelector('#getPass').value
        createUserWithEmailAndPassword(auth, getEmail, getPass)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert("Signup Successfully")
                location.href='login.html'
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.message)
            });
    })
}
// login.html and login page
let lbtn = document.querySelector('#lbtn')
if(lbtn){
    lbtn.addEventListener('click', () => {
        let lemail = document.querySelector('#lemail').value
        let lpass = document.querySelector('#lpass').value
        signInWithEmailAndPassword(auth, lemail, lpass)
            .then((userCredential) => { 
                alert("Login successfully!!");
                location.href='restaurant.html'                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.message)
            })
    })
}
