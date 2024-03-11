const signupForm = document.querySelector('#signupFotm')
signupForm.addEventListener( 'submit', (e)=>{
  e.preventDefault ()
  const name = document.querySelector('#name').value;
  const  email=document.querySelector("#email").value;
  const  password=document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem('users')) || []
  const isUserRegistered = users.find(user => user.email === email);
   if(isUserRegistered){
    return alert("El usuario ya esta registrado");
   }

   users.push({name: name, email, password: password})
   localStorage.setItem('users', JSON.stringify(users));
   alert( "Usuario Registrado Correctamente");
   // regreso al login//
   window.location.href="login.html"
})