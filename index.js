//manda a la paguina login si no esta una sesion iniciada 
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html';
}
else{
     Swal.fire({
        title: "¡Bienvenido!",
        text: `Hola ${user.name}, gracias por entrar a mi paguina`,
        backdrop: true,
        confirmButtonText: "Aceptar",
        customClass: {
          popup: 'popup-class'
      },

     })
    }
document.getElementById('logout').addEventListener("click", function(event){
    const targetElement = event.target;
  //-------------------Verifica que este una sesion iniciada-------------//
   if(localStorage.getItem('login_success')){
    Swal.fire({
      icon: "warning",
        title: "Cerrando sesion!!",
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
    

//----------------seleccion de los elementos-------------------

const btnEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar = document.querySelector(".encriptada");
const aviso = document.querySelector(".texto-aviso");
const resultado = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesncriptar = document.querySelector(".btn-desencriptar");


// ------------- boton encriptat-----------------
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let = texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f0-9']/g, " ");

    if(texto == ""){
      return Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El campo de texto no debe estar vacio',
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
        text: 'El texto debe ser solo en minusculas',
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
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

       resultado.innerHTML = texto;
       btnCopiar.style.visibility = "inherit";
       contenido.remove();
    }

})



// ------------- boton desencriptar-----------------
btnDesncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let = texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f0-9']/g, " ");
    
//--------------Advertencias-----------------------------//
   if(texto == ""){
     return Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El campo de texto no debe estar vacio',
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
        text: 'El texto debe ser solo en minusculas',
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
        texto = texto.replace(/ente/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resultado.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

})

// ------------- boton de copiar-----------------
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
//Boton de borrado//
//-----------------------------------
function borrar(){
  location.reload();
}