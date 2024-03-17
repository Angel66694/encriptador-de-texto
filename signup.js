const signupForm = document.querySelector('#signupFotm')
signupForm.addEventListener( 'submit', (e)=>{
  e.preventDefault ()

  //----------Documentación--------------------//
  const name = document.querySelector('#name').value;
  const  email=document.querySelector("#email").value;
  const  password=document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem('users')) || []
  const isUserRegistered = users.find(user => user.email === email);
  //---------registro  de usuario---------------//
  if(password.length < 8){
    return Swal.fire({
      icon: "error",
      title: "Error",
      text: "La contraseña debe tener al menos 8 caracteres",
      confirmButtonText: "Aceptar",
      timer: 4500,
      timerProgressBar: true,
      toast: true,
      background:"#7ac95bdd",
      customClass: {
        popup: 'popop-class-mini'
      }

    })
  }
   if(isUserRegistered){
    return Swal.fire({
      icon: "warning",
      text:  "El usuario ya esta registrado",
      confirmButtonText: "Aceptar",
      customClass: {
        popup: 'popup-class'
    }
  
    }).then(()=> {
      document.querySelector('#name').value = "";
      document.querySelector ('#signupFotm').focus();
    })
    return;
   }

   users.push({name: name, email, password: password})
   localStorage.setItem('users', JSON.stringify(users));
   Swal.fire({
    icon: "success",
    title:"Felicidades!!",
    text: "Usuario Registrado Correctamente",
    confirmButtonText: "Aceptar",
    customClass: {
      popup: 'popup-class'
  },
    showCancelarButton: true,
    showConfirmarButton: true
  }).then((result)=>{
    if(result.isConfirmed){
      // regreso al login//
   window.location.href="login.html"

    }
  })
   
})