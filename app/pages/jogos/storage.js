function loadAndDisplayjogos() {
    // pega os jogos do localStorage
  const jogos = JSON.parse(localStorage.getItem('jogos')) || [];
  
    // lista no HTML
  const gameList = document.getElementById('game-list');
  
    // modelo do card
  const cardModel = document.querySelector('#registro');
  
  gameList.innerHTML = '';
  
    const APIKEY = '7ce3ca81aeae42e090e5481a28797345'

    const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2011-01-01,2023-06-01&ordering=-added`
  
  for (let i = 0; i < jogos.length; i++) {
    const game = jogos[i];
  
    const clonedCard = cardModel.cloneNode(true);
  
    clonedCard.querySelector('#span-nome').textContent = game.jogo.name;

    

    fetch(url)  
      .then(response => response.json())
      .then(data => {
        
        data = data.results;
        console.log(data);
        for(let i = 0; i < data.length; i++){
          console.log(data[i])
          let g = data[i];
          if(game.jogo.name == g.name){
            console.log(data)
            clonedCard.querySelector('#img-game').src = g.background_image;
          }
        }
      });
        
  
      
  
    gameList.appendChild(clonedCard);
  
  }
  
  
}
window.onload = loadAndDisplayjogos;