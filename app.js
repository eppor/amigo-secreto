let listaAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == '') {
        alert("Por favor, insira um nome.");
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

function limparCampo() {
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}

function limparLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}