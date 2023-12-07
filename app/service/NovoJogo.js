export class NovoJogo {
    constructor() {}
  
    // Constante para a chave do armazenamento local
    LOCAL_STORAGE_KEY = 'jogos';
  
    saveLocal(game) {
      // Obtendo jogos do armazenamento local
      let jogos = localStorage.getItem(this.LOCAL_STORAGE_KEY);
  
      // Verificando se há jogos existentes
      jogos = jogos ? JSON.parse(jogos) : [];
  
      // Adicionando o novo jogo ao array
      jogos.push(game);

      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(jogos));

      return jogos;
    }
  }