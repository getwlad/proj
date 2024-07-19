const exibirAlerta = (event) => {
  alert(`Você clicou! coordenadas: X: ${event.clientX}, Y: ${event.clientY}`);
};

const alterarTexto = () => {
  const titulo = document.getElementById("titulo");
  const texto = prompt("Digite o seu texto");
  titulo.innerText = texto;
};
