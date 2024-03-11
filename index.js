const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html';
}

const logout = document.querySelector('#logout');
const parrafo = document.getElementById('parrafo')
logout,addEventListener('click', ()=>{
     parrafo.style.display = 'block';
     localStorage.removeItem('login_success');
     window.location.href = 'login.html';
})