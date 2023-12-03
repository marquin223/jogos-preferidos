
(function () {
    
    document.querySelector('#input-email').addEventListener('blur', function () {
        validateEmail();
    });

    document.querySelector('#input-senha').addEventListener('blur', function () {
        validateSenha();
    });

    document.querySelector('#input-email').addEventListener('blur', function () {
        validateUsuario();
    });

    desabilitarBotao();
    

    document.getElementById('form-login').onsubmit = function (event) {

        event.preventDefault();


        if (!isFormValid()) {
            window.alert('Email ou senha incorretos');
            return;
        }

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
        emailError.textContent = 'O valor não corresponde a um email válido.';
        emailError.style.display = 'block';
        emailInput.setCustomValidity('O valor não corresponde a um email válido.');
        return true;
        }

        emailError.style.display = 'none';
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

    function validateUsuario() {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];

            if (document.getElementById('input-email').value == usuario.user.email) {
                if (document.getElementById('input-senha').value == usuario.user.senha) {
                    return true
                }
            }
    
        }
    }

    function isFormValid() {
        return (
        validateEmail() &&
        validateSenha() &&
        validateUsuario()
        );
    }


    function desabilitarBotao() {
        const submitButton = document.getElementById('botao-submit');
        submitButton.disabled = true;
        
        document.getElementById('form-login').addEventListener('change', function () {
            if (this.checkValidity()) {
                submitButton.disabled = false;
                if (validateUsuario() == true)
                    document.querySelector('#botao-submit').addEventListener('click', function () {
                        window.location = "../jogos/jogos.html"
                    });
            } else {
                submitButton.disabled = true;
            }
        });
    }
})();