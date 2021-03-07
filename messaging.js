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
    "https://pedantic-perlman-bbe478.netlify.app/iframe.html"
  );
}
function recibir(evento) {
  if (
    evento.origin == "https://pedantic-perlman-bbe478.netlify.app/iframe.html"
  ) {
    document.getElementById("nombre").value = evento.data;
  }
}
window.addEventListener("load", iniciar);
