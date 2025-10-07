document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const piel = document.getElementById("piel").value;
  const clima = document.getElementById("clima").value;
  const recomendacion = document.getElementById("recomendacion");

  let resultado = "";

  if (piel === "seca" && clima === "frio") {
    resultado = "Te recomendamos <strong>Spa del Bosque</strong> por su aceite de aguacate y cacao.";
  } else if (piel === "grasa" && clima === "calido") {
    resultado = "Prueba <strong>Abrazo de Azúcar</strong> con jengibre seco y aceite de girasol.";
  } else if (piel === "mixta" && clima === "humedo") {
    resultado = "Te puede funcionar <strong>Tarde de Toronja</strong> por su frescura cítrica.";
  } else if (piel === "sensible") {
    resultado = "Usa <strong>Mimos de Coco</strong>, suave y anticelulítico.";
  } else {
    resultado = "Puedes crear tu propia fórmula casera con azúcar, café y aceite de oliva.";
  }

  recomendacion.innerHTML = `<p>${resultado}</p>`;
});