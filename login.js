

const loginForm = document.querySelector("#loginform");
loginForm.addEventListener( "submit", (e)=>{
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email && user.password === password);
    if(!validUser){
        Swal.fire({

            icon: "warnig",
            title: "Error",
            text: "Correo y/o contraseña incorrectos"
        });
    } // to prevent page
    Swal.fire({
        icon: "success",
        title: "Acceso correcto",
        text: `Bienvenido ${validUser.name}`
    })
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href="index.html";
})