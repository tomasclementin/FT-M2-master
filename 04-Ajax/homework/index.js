const btnAmigos = document.querySelector('#boton');
const ulAmigos = document.querySelector('#lista');

function showFriends() {
    ulAmigos.innerHTML = '';
    fetch('http://localhost:5000/amigos')
      .then(res => res.json())
      .then(amigos => {
        for (let i = 0; i < amigos.length; i++) {
            // let li = document.createElement('li');
            let li = `<li>${amigos[i].name} <button onclick="deleteAmigo(${amigos[i].id})">X</button></li>`;
            // li.innerText = amigos[i].name;
            ulAmigos.innerHTML = ulAmigos.innerHTML + li;
            // ulAmigos.append(li);
        }
    });
}

const inputAmigo = document.querySelector('#input');
const btnSearch = document.querySelector('#search');
const spanAmigo = document.querySelector('#amigo');

function searchAmigo() {
    let idAmigo = inputAmigo.value;
    inputAmigo.value = '';
    fetch(`http://localhost:5000/amigos/${idAmigo}`)
      .then(res => res.json())
      .then(amigo => {
        spanAmigo.innerText = amigo.name;
      });
}

const inputDelete = document.querySelector('#inputDelete');
const btnDelete = document.querySelector('#delete');
const spanDelete = document.querySelector('#success');

function deleteAmigo(idFriend) {
    if (typeof idFriend !== 'number') {
        idFriend = inputDelete.value;
        inputDelete.value = '';
    }
    fetch(`http://localhost:5000/amigos/${idFriend}`, {
        method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        spanDelete.innerText = 'Amigo borrado exitosamente';
        showFriends();
      });
}

btnAmigos.addEventListener('click', showFriends);
btnSearch.addEventListener('click', searchAmigo);
btnDelete.addEventListener('click', deleteAmigo);