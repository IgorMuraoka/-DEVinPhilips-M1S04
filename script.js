let contasClientes = [];

function validaSenha(evento){
    if(evento.target.password.value === evento.target.confirm.value){
        return true
    } else{
        return false
    }
}

function armazenaDados(evento){
    evento.preventDefault();

    if(validaSenha(evento)){
        const conta = {
            nome: evento.target.name.value,
            cpf: evento.target.cpf.value,
            celular: evento.target.tell.value,
            senha: evento.target.password.value,
            conta: Math.floor(1000 + Math.random() * 900000),
            saldo: 0
        };

        contasClientes.push(conta);
        alert(`Conta criada com sucesso! Número: ${conta.conta}`);
    } else{
        alert('Senhas não conferem!')
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', armazenaDados);

const checkSaldo = document.getElementById('saldo');
checkSaldo.addEventListener('click', () => document.getElementById("acaoValor").disabled = true)

const checkSaque = document.getElementById('saque')
checkSaque.addEventListener('click', () => document.getElementById("acaoValor").disabled = false)

const checkDeposito = document.getElementById('deposito')
checkDeposito.addEventListener('click', () => document.getElementById("acaoValor").disabled = false)

function saque (){
console.log('teste saque');
}

function deposito (conta, valor){
    const found = contasClientes.find(e => e.conta == conta);
    if(valor <= 0){
        alert("Digite um valor maior que R$ 0,00  para efetuar o depósito")
    } else {
        found.saldo += valor
        alert(`Depósito efetuado com sucesso! Saldo atual: ${found.saldo}`)
    }

}

function saldo (conta){
    const found = contasClientes.find(e => e.conta == conta);
    return alert(`Saldo atual: ${found.saldo}`)
}


function efetuarOperacao (ev){
    ev.preventDefault();
    
    const acao = {
        tipo: ev.target.acao.value,
        valor: Number(ev.target.acaoValor.value),
        conta: Number(ev.target.acaoConta.value),
        senha: ev.target.acaoPassword.value
    }
    
    for(i=0; i<contasClientes.length; i++ ){
        if(contasClientes[i].conta == acao.conta && contasClientes[i].senha == acao.senha){
            switch (acao.tipo){
                case 'saque':
                    saque();
                    break;
                case 'deposito':
                    deposito(acao.conta, acao.valor);
                    break;
                case 'saldo':
                    saldo(acao.conta);
                    break;
                default:
                    alert('Operação inválida!');
            }
        } else if(contasClientes[i].conta == acao.conta && contasClientes[i].senha != acao.senha){
            alert("Senha incorreta");
        } else{
            alert("Conta não existe")
        }
    }

}


const formAcoes = document.getElementById('formAcoes');
formAcoes.addEventListener('submit', efetuarOperacao)