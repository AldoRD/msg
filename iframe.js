function iniciar() {
  window.addEventListener("message", recibir);
}
function recibir(evento) {
  var cajadatos = document.getElementById("cajadatos");
  cajadatos.innerHTML = "Mensaje desde: " + evento.origin + "<br>";
  cajadatos.innerHTML += "mensaje: " + evento.data;
}
window.addEventListener("load", iniciar);
