let loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let pswd = document.getElementById("pswd").value;
  console.log(username + " " + pswd)
  fetchData('login', {username: username, password: pswd})
  .then((data) => {
      if(!data.message) {
          window.location.href="home.html";
      }
  }
  )
  .catch((err) => {
      let error = err.message;
      let p = document.querySelector("#login-form");
      p.innerText = error;

  }
  )

}

let regForm = document.getElementById("register-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let pswd = document.getElementById("pswd").value;
  console.log(fname + " " + lname + " "+ email + " "+ username + " " + pswd )

  fetchData('register', {username: username, password: pswd, firstname: fname, lastname: lname, emailid: email })
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log('Error!  ${errText}')
  });
}