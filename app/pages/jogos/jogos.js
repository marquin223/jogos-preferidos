import { Jogo } from '../../models/jogo.js';
import { Game } from '../../models/game.js';
import { NovoJogo } from '../../service/NovoJogo.js';

(function () {
    
    $("#botao-adiciona").on('click', function() {
        $("#jogos-modal").slideDown(1000);
    });

    $("#bota").on('click', function() {
        location.reload();
    });

    document.getElementById("jogs").onsubmit = function (event) {

        event.preventDefault();

        const jogo = LerEcriarJogo();

        let game = new Game(jogo);
        
        saveReportLocal(game)
    }

    function LerEcriarJogo() {
        let name = document.getElementById('input-nome').value;
        
        return new Jogo(name);
    }

    function saveReportLocal(game) {
        
        const novoJogo = new NovoJogo();
    
        novoJogo.saveLocal(game);
    }
})();