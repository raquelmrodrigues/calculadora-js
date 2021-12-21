function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        inicia() {
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = '';
        },

        deletaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida!')
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida!')
                return;
            }
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', e => {
                // this -> document
                const el = e.target;
               
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                
                if(el.classList.contais('btn-del')) {
                    this.deletaUm();
                }
                if(el.classList.contains(btn-equal)) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();