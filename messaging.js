function iniciar() {
  var boton = document.getElementById("boton");
  boton.addEventListener("click", enviar);
  window.addEventListener("message", recibir);
}
function enviar() {
  var nombre = document.getElementById("nombre").value;
  var iframe = document.getElementById("iframe");
  iframe.contentWindow.postMessage(
    nombre,
    "https://adoring-panini-4388ae.netlify.app"
  );
}
function recibir(evento) {
  if (evento.origin == "https://adoring-panini-4388ae.netlify.app") {
    document.getElementById("nombre").value = evento.data;
  }
}
window.addEventListener("load", iniciar);
