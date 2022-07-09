let caja1 = document.querySelector("#caja1");
let caja2 = document.querySelector("#caja2");
let caja3 = document.querySelector("#caja3");
let caja4 = document.querySelector("#caja4");
let colorGlobal = "red";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorGlobal = "goldenrod";
  } else if (event.key === "s") {
    colorGlobal = "green";
  } else if (event.key === "d") {
    colorGlobal = "purple";
  }
  console.log("El color seleccionado es " + colorGlobal);
});

const pintar = function (elemento) {
  elemento.style.backgroundColor = colorGlobal;
};

caja1.addEventListener("click", () => pintar(caja1));

caja2.addEventListener("click", () => pintar(caja2));

caja3.addEventListener("click", () => pintar(caja3));

caja4.addEventListener("click", () => pintar(caja4));
