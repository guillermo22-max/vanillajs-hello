/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let msj = ["El Lagarto", "Mi Gato", "Mi Perro", "Su Araña"];
  let accion = ["se comió", "orinó", "aplastó", "rompió"];
  let cosa = ["mi tarea", "las llaves", "el teléfono"];
  let cuando = [
    "antes de la clase",
    "mientras dormía",
    "cuando preparaba la comida",
    "durante mi almuerzo",
    "mientras me estaba duchando"
  ];

  function generarExcusaBtn() {
    const randomWho = msj[Math.floor(Math.random() * msj.length)];
    const randomAction = accion[Math.floor(Math.random() * accion.length)];
    const randomWhat = cosa[Math.floor(Math.random() * cosa.length)];
    const randomWhen = cuando[Math.floor(Math.random() * cuando.length)];

    const excusa = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    console.log(document.getElementById("excusa"));
    document.getElementById("excusa").innerHTML = excusa;
  }

  generarExcusaBtn();

  document
    .getElementById("generarExcusaBtn")
    .addEventListener("click", generarExcusaBtn);
  console.log("Generador de excusas inicializado!");
};
