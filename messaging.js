function iniciar() {
  var boton = document.getElementById("boton");
  boton.addEventListener("click", enviar);
  window.addEventListener("message", recibir);
}
function enviar() {
  var nombre = document.getElementById("nombre").value;
  var iframe = document.getElementById("iframe");
  iframe.contentWindow.postMessage(nombre, "http://www.dominio2.com");
}
function recibir(evento) {
  if (evento.origin == "http://www.dominio2.com") {
    document.getElementById("nombre").value = evento.data;
  }
}
window.addEventListener("load", iniciar);
