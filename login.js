const loginForm = document.querySelector("#loginform");
loginForm.addEventListener( "submit", (e)=>{
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const alerta = document.getElementById("alerta");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email && user.password === password);
    if(!validUser){
        alerta.style.display = 'block';
    } // to prevent page
    alert(`Bienvenido ${validUser.name}`);
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href="index.html";
})