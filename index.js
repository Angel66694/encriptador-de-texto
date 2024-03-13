//manda a la paguina login si no esta una sesion iniciada 
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html';
}

document.getElementById('logout').addEventListener("click", function(event){

    const mainSection = document.getElementById('logout');
    const targetElement = event.target;
    //verifica si el clic se origino dentro de la seccion espesificada//
    if(mainSection.contains(targetElement)){
        //realiza la accion de cierre de sesion
    const logout = document.querySelector('#logout');
    const parrafo = document.getElementById('parrafo')
    logout,addEventListener('click', ()=>{
        parrafo.style.display = 'block';
        localStorage.removeItem('login_success');
        window.location.href = 'login.html';
    })

    }else{
        //no realizar ninguna accion//
    }
})




