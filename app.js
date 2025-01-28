let listaAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
        if (nomeDoAmigo != '') {
            listaAmigos.push(nomeDoAmigo);

            // let li = document.createElement('li');
            // li.textContent = nomeDoAmigo;
            // listaAmigos.appendChild(li);

            limparCampo();           
        } else {
            alert("Por favor, insira um nome.");
            return false;
        }
    let nome = document.getElementById('listaAmigos');
    nome.innerHTML = listaAmigos;
}

function limparCampo() {
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}