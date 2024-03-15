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
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El campo de texto no debe estar vacio',
        customClass: {
          popup: 'popup-class'
      },
      }),
    
      setTimeout(()=>{
        aviso.removeAttribute("style");
      },1500);
    }
  

    else if(texto !== txt){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'No debe tener acentos y/o caracteres especiales',
        customClass: {
          popup: 'popup-class'
      },
    }),
        setTimeout(()=>{
          //aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El texto debe ser solo en minusculas',
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

       // resultado.innerHTML = texto;
        //btnCopiar.style.visibility = "inherit";
      //  contenido.remove();
    }

})



// ------------- boton desencriptar-----------------
btnDesncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let = texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);

    if(texto == ""){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El campo de texto no debe estar vacio',
        customClass: {
          popup: 'popup-class'
      },
    }),

      setTimeout(()=>{
        aviso.removeAttribute("style");
      },1500);
    }

    else if(texto !== txt){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'No debe tener acentos y/o caracteres especiales',
        customClass: {
          popup: 'popup-class'
      },
    }),
  
        setTimeout(()=>{
          aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'El texto debe ser solo en minusculas',
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