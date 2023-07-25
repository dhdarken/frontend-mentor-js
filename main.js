const d = document;
const button = d.getElementById("buttons");
const carta1 = d.getElementById("card");
const carta2 = d.getElementById("carta2");
const texto = d.getElementById("text");

function mostrar() {
  carta1.style.display = "none";
  carta2.style.display = "flex";
}

button.addEventListener("click", (e) => {
  texto.innerHTML = "You selected " + ` ${e.target.id}` + " out of 5";
  console.log(`${e.target.id}`);
});
