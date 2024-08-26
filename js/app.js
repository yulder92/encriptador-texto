const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let matrizCodigo

function btnEncriptar(StringEncriptada){

  const textEncriptado = encriptar(textArea.value)
  mensaje.value = textEncriptado.textArea
  textArea.value = "";
  mensaje.StylebackgroundImage = "none"

  console.table (matrizCodigo) = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  StringEncriptada = StringEncriptada.tolowerCase()


  for(let i = 0; i <matrizCodigo.length; i++){
    if (StringEncriptada.includes(matrizCodigo{i}{0})){
      StringEncriptada=StringEncriptada.ReplaceAll
    }
  }
  return StringEncriptada
}

function btnDesencriptar(){
  const textEncriptado = Desencriptar(textArea.value)
  mensaje.value = textdesencriptado
  textArea.value = "";
  mensaje.StylebackgroundImage = "none"

  console.table (matrizCodigo) = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  console.table (matrizCodigo)

  StringDesncriptada = StringDesencriptada.tolowerCase()

  for(let i=0;i<matrizCodigo.length;i++){
    if (StringEncriptada.includes(matrizCodigo{i}{0})){
      StringEncriptada=StringDesencriptada.ReplaceAll
    }
  }
}