//Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.
//let amigos[];
// let nomeDoAmigo = document.getElementById('amigo');
// console.log(nomeDoAmigo);

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
        if (nomeDoAmigo == '') {
        alert("Por favor, insira um nome.");
        return false;
    }   else {
        console.log(nomeDoAmigo);
    }
    }
