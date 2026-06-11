const certificados = [
  {
    titulo: "Python Essentials 1",
    instituicao: "Cisco Networking Academy",
    imagem: "img/certificados/python.jpeg"
  },
  {
    titulo: "JavaScript Essentials 1",
    instituicao: "Cisco Networking Academy",
    imagem: "img/certificados/javascript.jpeg"
  },
  {
    titulo: "Computer Hardware Basics",
    instituicao: "Cisco Networking Academy",
    imagem: "img/certificados/hardware.jpeg"
  },
  {
    titulo: "Cambridge Linguaskill",
    instituicao: "Cambridge",
    imagem: "img/certificados/linguaskill.jpeg"
  }
];

const grid = document.getElementById("certificados-grid");

certificados.forEach((certificado) => {
  const card = document.createElement("article");
  card.classList.add("certificado-card");

  card.innerHTML = `
    <img src="${certificado.imagem}" alt="Certificado ${certificado.titulo}">
    <div class="certificado-info">
      <span>${certificado.instituicao}</span>
      <h2>${certificado.titulo}</h2>
      <a href="${certificado.imagem}" target="_blank">Ver certificado</a>
    </div>
  `;

  grid.appendChild(card);
});