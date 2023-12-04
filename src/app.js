/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let quienOptions = [
    "Las vecinas de valencia",
    "Encarnita y josefina",
    "Las chicas de verdad",
    "Los guaperas que se enamoran"
  ];
  let accionOptions = [
    "gritan orgullosas",
    "denuncian",
    "cuchichean",
    "mienten cuando dicen"
  ];
  let queOptions = [
    "“puta, puta, puta”",
    "que su abuelo se coló con una piedra romana",
    "que el pollo frito es lo mejor",
    "que nunca han sentido nada igual"
  ];
  let cuandoOptions = [
    "en el timbre",
    "en un baptisterio del siglo primero",
    "en ausencia de un buen cocido",
    "en Gandía Shore"
  ];

  let quien = quienOptions[Math.floor(Math.random() * quienOptions.length)];
  let accion = accionOptions[Math.floor(Math.random() * accionOptions.length)];
  let que = queOptions[Math.floor(Math.random() * queOptions.length)];
  let cuando = cuandoOptions[Math.floor(Math.random() * cuandoOptions.length)];

  let excusa = `${quien} ${accion} ${que} ${cuando}.`;

  console.log(excusa);

  document.getElementById("excusa").innerText = excusa;
};
