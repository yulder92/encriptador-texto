// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const textoEncriptar = document.querySelector('.text-area')
const mensaje = document.querySelector('.mensaje')
const tarjetaRespuesta = document.querySelector('.tarjeta-respuesta')
const btnCopiar = document.querySelector('.btn-copiar')
const textoDesencriptar = document.querySelector('.text-area')


/* ***** Encriptar Texto ***** */

function btnEncriptar() {
  let texto = textoEncriptar.value.toLowerCase()
  let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ")
  
  texto = texto.replace(/e/mg, "enter")
  texto = texto.replace(/i/mg, "imes")
  texto = texto.replace(/a/mg, "ai")
  texto = texto.replace(/o/mg, "ober")
  texto = texto.replace(/u/mg, "ufat")

  mensaje.innerHTML = texto
  btnCopiar.style.visibility = "inherit"
  tarjetaRespuesta.remove()
}


/* ***** Desencriptar Texto ***** */

function btnDesencriptar() {
  
  let texto = textoDesencriptar.value.toLowerCase()
  let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ")
  
  texto = texto.replace(/enter/mg, "e")
  texto = texto.replace(/imes/mg, "i")
  texto = texto.replace(/ai/mg, "a")
  texto = texto.replace(/ober/mg, "o")
  texto = texto.replace(/ufat/mg, "u")

  mensaje.innerHTML = texto
  btnCopiar.style.visibility = "inherit"
  tarjetaRespuesta.remove()
}


/* ***** Copiar Texto ***** */

function btnCopiarTexto() {
  let textoCopiar = mensaje
  textoCopiar.select()
  document.execCommand('copy')
  
}