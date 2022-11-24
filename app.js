const checkbox = document.getElementById("exampleCheck1");
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
  console.log("Ejecutando");
  console.log("Click en enviar");
  e.preventDefault();

  const datos = new FormData(formulario);
  console.log("campo email", datos.get("emailCampo"));
  console.log("campo contraseña", datos.get("passCampo"));

  if (checkbox.checked) {
    console.log("campo contraseña on");
    
    }
    formulario.reset();
});