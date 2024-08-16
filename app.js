
document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');

  if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      localStorage.setItem('user', JSON.stringify({ username, email, password }));
      alert("SignUp Successfully");

      window.location.href = 'login.html';
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem('isLoggedIn', true);
        alert("Logged in")
        window.location.href = 'dashboard.html';
      } else {
        alert('Incorrect email or password.');
      }
    });
  }
});

function redirectToLogin() {
  window.location.href = 'login.html';
}

function redirectToSignup() {
  window.location.href = 'index.html';
}










// import { auth , createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword ,signOut 

//  } from"./firebase.js";

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//     //   const uid = user.uid;
//     console.log("user", user);
//     } else {
//         console.log("user not exist");
//     }
//   });


// //   let signup = () => {
// //     let email = document.getElementById("email");
// //     let password = document.getElementById("password");
    
// //     signInWithEmailAndPassword(auth, email.value , password.value)
// //       .then((res) => {
// //         // const user = res.user;
// //         console.log( "user",res.user)
// //       })
// //       .catch((error) => {
// //         // const errorCode = error.code;
// //         // const errorMessage = error.message;
    
// //         console.log( "error",error.code)
// //       });
    
// //     };


// // let signup = () => {
// // let email = document.getElementById("email");
// // let password = document.getElementById("password");

// // createUserWithEmailAndPassword(auth, email.value , password.value)
// //   .then((res) => {
// //     // const user = res.user;
// //     console.log( "user",res.user)
// //   })
// //   .catch((error) => {
// //     // const errorCode = error.code;
// //     // const errorMessage = error.message;

// //     console.log( "error",error.code)
// //   });

// // };


// // let signupBtn = document.getElementById("signupBtn");

// // signupBtn.addEventListener("click", signup)



// let logout = () => {
//     signOut(auth).then(() => {
//         console.log("SignOut Successfully")
//   }).catch((error) => {

//   });
// }




//   let logOutBtn = document.getElementById("logOutBtn");

//   logOutBtn.addEventListener("click", logout)
  