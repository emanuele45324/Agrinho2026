// Array contendo várias dicas sustentáveis
const dicas = [
    "Dica: Evite o desperdício de alimentos planejando bem suas refeições!",
    "Dica: Tente ter uma pequena horta em casa, até mesmo em vasos. Temperos são um ótimo começo!",
    "Dica: Valorize os produtores locais e feiras livres da sua região.",
    "Dica: Composte os restos de alimentos (cascas de frutas e legumes) para criar adubo natural.",
    "Dica: Reduza o uso de plásticos descartáveis ao embalar seus lanches."
];

// Função que é ativada quando o botão é clicado
function gerarDica() {
    // Escolhe um número aleatório baseado na quantidade de dicas
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    
    // Pega o elemento de texto no HTML e muda o conteúdo dele
    const textoDica = document.getElementById("dica-texto");
    textoDica.innerText = dicas[indiceAleatorio];
}