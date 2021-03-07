function iniciar() {
  window.addEventListener("message", recibir);
}
function recibir(evento) {
  var cajadatos = document.getElementById("cajadatos");
  console.log("prueba");
  if (evento.origin == "https://pedantic-perlman-bbe478.netlify.app") {
    console.log("prueba");
    cajadatos.innerHTML = "Mensaje válido: " + evento.data;
    evento.source.postMessage("Mensaje recibido", evento.origin);
  } else {
    cajadatos.innerHTML = "Origen Invalido";
  }
}
window.addEventListener("load", iniciar);
