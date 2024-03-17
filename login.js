

const loginForm = document.querySelector("#loginform");
loginForm.addEventListener( "submit", (e)=>{
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email && user.password === password);
    if(!validUser){
        Swal.fire({

            icon: "warning",
            title: "Error",
            text: "Correo y/o contraseña incorrectos",
            confirmButtonText: "Aceptar",
            customClass: {
                popup: 'popup-class'
            }
           
        }).then(()=> {
            document.querySelector("#email").value = "";
            document.querySelector("#password").value = "";
            document.querySelector ("#loginform").focus();
          })
          return;
    }
     //-------------Acede a la pagina principal----------//
    Swal.fire({
        icon: "success",
        customClass: {
            popup: 'popup-class'
        },
        title: "Acceso correcto",
        text: `Bienvenido ${validUser.name}`,
        showCancelarButton: true,
        showConfirmarButton: true,
        confirmButtonText: "Aceptar",

    }).then((result)=>{
        if(result.isConfirmed){
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href="index.html";
        };
    });
});

