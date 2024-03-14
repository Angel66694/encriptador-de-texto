

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
     //-------------Acede a la paguina principal----------//
    Swal.fire({
        icon: "success",
        title: "Acceso correcto",
        text: `Bienvenido ${validUser.name}`,
        width: '30%',
        background: '#B2BF3F',
        customClass: {
            popup: 'popup-class'
        },
        showCancelarButton: true,
        showConfirmarButton: true

    }).then((result)=>{
        if(result.isConfirmed){
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href="index.html";
        };
    });
});

