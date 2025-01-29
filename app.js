let listaAmigos = [];

// adiciona nomes de amigos num array listaAmigos[] usando botao Adicionar
function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == '') {
        alert('Por favor, insira um nome.');
        return false;
    } else {
        limparLista();
        listaAmigos.push(nomeDoAmigo); 
        let lista = document.getElementById('listaAmigos');
        for (i = 0; i < listaAmigos.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listaAmigos[i];
            lista.appendChild(li);
        }
        limparCampo();
    }
}

// sortea um dos amigos do array listaAmigos[] se nao estiver vazia
function sortearAmigo() {
    if (listaAmigos == '') {
        alert('Por favor, insira um nome.');
    } else {
        let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        let amigo = document.querySelector('resultado');
        resultado.innerHTML = amigoSecreto;
    }
    limparLista();
}

// limpa campo do input apos adicionar nome do amigo
function limparCampo() {
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}
// limpa lista abaixo do campo input, para que nao haja duplicacao de listas
function limparLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}