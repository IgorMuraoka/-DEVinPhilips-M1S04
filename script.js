let contasClientes = [];

function validaSenha(evento){
    // const senha1 = evento.document.getElementById('password').value;
    // const senha2 = evento.document.getElementById('confirm').value;

    // return senha1 === senha2?  true : false;

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