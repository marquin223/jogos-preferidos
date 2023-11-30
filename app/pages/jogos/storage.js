function loadAndDisplayjogos() {
    // Obtém os relatórios do localStorage
  const jogos = JSON.parse(localStorage.getItem('jogos')) || [];
  
    // Obtém a referência ao da lista no HTML
  const gameList = document.getElementById('game-list');
  
    // Obtém o modelo do card
  const cardModel = document.querySelector('#registro');
    //cardModel.style.display = 'block';
  
    // Limpa a lista antes de adicionar os relatórios e depois de salvar a referência em cardModel
  gameList.innerHTML = '';
  
    // Itera sobre os relatórios e os adiciona à lista no HTML
  for (let i = 0; i < jogos.length; i++) {
    const game = jogos[i];
  
    const clonedCard = cardModel.cloneNode(true);
  
    clonedCard.querySelector('#span-nome').textContent = game.jogo.name;
      
  
    gameList.appendChild(clonedCard);
  
  }
  
  const hasResults = jogos.length > 0;
  showResultsContainer(hasResults);
}
  
function showResultsContainer(hasResults) {
  const noResultDiv = document.getElementById('no-result');
  const jogoContainerDiv = document.getElementById('game-container');
  const jogoContainerSkeleton = document.getElementById(
    'game-container-skeleton');
  jogoContainerSkeleton.style.display = 'none';
  if (hasResults) {
    noResultDiv.style.display = 'none';
    jogoContainerDiv.style.display = 'block';
  } else {
    noResultDiv.style.display = 'block';
    jogoContainerDiv.style.display = 'none';
  }
}
window.onload = loadAndDisplayjogos;