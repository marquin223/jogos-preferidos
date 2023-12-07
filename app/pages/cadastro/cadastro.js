import { User } from '../../models/user.js';
import { Usuario } from '../../models/usuario.js';
import { NovoUsuario } from '../../service/NovoUsuario.js';

(function () {

    $("#input-tel").mask("(00) 0000-0000")

    document.querySelector('#input-nome').addEventListener('blur', function () {
        validateNome();
    });
    
    document.querySelector('#input-email').addEventListener('blur', function () {
        validateEmail();
    });

    document.querySelector('#input-tel').addEventListener('blur', function () {
        validateTel();
    });

    document.querySelector('#input-senha').addEventListener('blur', function () {
        validateSenha();
    });

    desabilitarBotao();


    document.getElementById('form-cadastro').onsubmit = function (event) {

        event.preventDefault();


        if (!isFormValid()) {
            window.alert('Por favor, verifique os campos destacados.');
            return;
        }

        const user = LerECriarUsusuario();

        let usuario = new Usuario(user);

        saveReportLocal(usuario);

    }

    function saveReportLocal(usuario) {
        const novoUsuario = new NovoUsuario();
    
        novoUsuario.saveLocal(usuario);
    }

    function LerECriarUsusuario() {
        let nome = document.getElementById('input-nome').value;
        let email = document.getElementById('input-email').value;
        let senha = document.getElementById('input-senha').value;
        
        return new User(email, nome, senha);
    }

    function validateNome() {
        const nomeInput = document.getElementById('input-nome');
        const nomeError = document.getElementById('nome-erro');

            
        if (nomeInput.validity.valueMissing) {
            
        nomeError.textContent = 'O campo é obrigatório.';
        nomeError.style.display = 'block';
            
        nomeInput.setCustomValidity('O campo é obrigatório.');
            return false;
        }

        if (nomeInput.validity.patternMismatch) {
        nomeError.textContent = 'Nome inválido';
        nomeError.style.display = 'block';
        nomeInput.setCustomValidity('Nome inválido');
        return true;
        }

        nomeError.style.display = 'none';
        return true;
    }
    

    function validateEmail() {
        const emailInput = document.getElementById('input-email');
        const emailError = document.getElementById('email-erro');

            
        if (emailInput.validity.valueMissing) {
            
        emailError.textContent = 'O campo é obrigatório.';
        emailError.style.display = 'block';
            
        emailInput.setCustomValidity('O campo é obrigatório.');
            return false;
        }

        if (emailInput.validity.patternMismatch) {
        emailError.textContent = 'Email inválido.';
        emailError.style.display = 'block';
        emailInput.setCustomValidity('O valor não corresponde a um email válido.');
        return true;
        }

        emailError.style.display = 'none';
        return true;
    }

    function validateTel() {
        const telInput = document.getElementById('input-tel');
        const telError = document.getElementById('tel-erro');

            
        if (telInput.validity.valueMissing) {
            
        telError.textContent = 'O campo é obrigatório.';
        telError.style.display = 'block';
            
        telInput.setCustomValidity('O campo é obrigatório.');
            return false;
        }

        if (telInput.validity.patternMismatch) {
        telError.textContent = 'Telefone inválido.';
        telError.style.display = 'block';
        telInput.setCustomValidity('O valor não corresponde a um telefone válido.');
        return true;
        }

        telError.style.display = 'none';
        return true;
    }


    function validateSenha() {
        const senhaInput = document.getElementById('input-senha');
        const senhaError = document.getElementById('senha-erro');

            
        if (senhaInput.validity.valueMissing) {
            
        senhaError.textContent = 'O campo é obrigatório.';
        senhaError.style.display = 'block';
            
        senhaInput.setCustomValidity('O campo é obrigatório.');
        return false;
        }

        if (senhaInput.validity.patternMismatch) {
        senhaError.textContent = 'senha inválida.';
        senhaError.style.display = 'block';
        senhaInput.setCustomValidity('senha inválida.');
        return true;
        }

        senhaError.style.display = 'none';
        return true;
    }


    function isFormValid() {
        return (
        validateEmail() &&
        validateSenha() &&
        validateNome () &&
        validateTel ()
        );
    }


    function desabilitarBotao() {
        const submitButton = document.getElementById('botao-cadastro');
        submitButton.disabled = true;
        
        document.getElementById('form-cadastro').addEventListener('change', function () {
            if (this.checkValidity()) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        });
    }
})();