//manda a la pagina login si no esta una sesión iniciada 
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html';
}
else{
     Swal.fire({
        title: "¡Bienvenido!",
        text: `Hola ${user.name}, gracias por entrar a mi pagina`,
        backdrop: true,
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'popup-class'
      },

     })
    }
document.getElementById('logout').addEventListener("click", function(event){
    const targetElement = event.target;
  //-------------------Verifica que este una sesión iniciada-------------//
   if(localStorage.getItem('login_success')){
    Swal.fire({
      icon: "warning",
        title: "Cerrando sesión!!",
        text:  "¿Esta seguro de que quiere cerrar sesión?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Cerrar Sesión",
        customClass: {
          popup: 'popup-class'
      },

    }).then((resul) =>{
      if(resul.isConfirmed){
         localStorage.removeItem('login_success');
         window.location.href="login.html";
       }
    });
   }else{
    const logout = document.querySelector('#logout');
    logout,addEventListener('click', ()=>{
       localStorage.removeItem('login_success');
        window.location.href = 'login.html';
   })
  }
});
    

//----------------selección de los elementos-------------------

const btnEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar = document.querySelector(".encriptada");
const aviso = document.querySelector(".texto-aviso");
const resultado = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesncriptar = document.querySelector(".btn-desencriptar");


// ------------- botón encriptar-----------------
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let = texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f0-9']/g, " ");

    if(texto == ""){
      return Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El campo de texto no debe estar vació',
        backdrop: true,
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'popup-class'
      },
      }),
    
      setTimeout(()=>{
        aviso.removeAttribute("style");
      },1500);
    }
  

    else if(texto !== txt){
     return Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'No debe tener acentos y/o caracteres especiales',
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'popup-class'
      },
    }),
        setTimeout(()=>{
        aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
    return  Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El texto debe ser solo en minúsculas',
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'popup-class'
      },
    }),
     
      setTimeout(()=>{
        aviso.removeAttribute("style");
      },1500);

    }
    else{
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

       resultado.innerHTML = texto;
       btnCopiar.style.visibility = "inherit";
       contenido.remove();
    }

})



// ------------- botón Desencriptar-----------------
btnDesncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let = texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f0-9']/g, " ");
    
//--------------Advertencias-----------------------------//
   if(texto == ""){
     return Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El campo de texto no debe estar vació',
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'popup-class'
      },
    }),

      setTimeout(()=>{
        aviso.removeAttribute("style");
      },1500);
    }

    else if(texto !== txt){
    return  Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'No debe tener acentos y/o caracteres especiales',
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'popup-class'
      },
    }),
  
        setTimeout(()=>{
          aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
     return   Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El texto debe ser solo en minúsculas',
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'popup-class'
      },
    }),
     

      setTimeout(()=>{
        aviso.removeAttribute("style");
      },1500);

    }
    else{
      texto = texto.replace(/ufat/g, "u");
       texto = texto.replace(/ober/g, "o");
       texto = texto.replace(/ai/g, "a");
       texto = texto.replace(/imes/g, "i");
       texto = texto.replace(/enter/g, "e");

            resultado.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

})

// ------------- botón de copiar-----------------
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    if(resultado.select){
        let copiar = resultado;
    copiar.select();
    document.execCommand("copy");
    textEncriptar.value = "";
    }
    
});

//------------------------------------
//Botón de borrado//
//-----------------------------------
function borrar(){
  location.reload();
}