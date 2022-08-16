'use strict'

const data = [{
    id: 1,
    nombre: 'One Kiss',
    autor: 'Dua Lipa & Calvin Harris'
},{
    id: 2,
    nombre: 'Outside',
    autor: 'Calvin Harris'
},{
    id: 3,
    nombre: 'Ojitos Lindos',
    autor: 'Bad Bunny'
},{
    id: 4,
    nombre: 'Stay With Me',
    autor: 'Calvin Harris & Pharrell Williams'
},
{
    id: 5,
    nombre: 'Devuelveme a mi Chica',
    autor: 'Hombres G'
}]

const addPlaylist = ()=>{
    let playlist = "";
    for(let i in data){
        if(data[i].id == 1){
            playlist += `<div class="carousel-item active" onclick='reproducir(${data[i].id})'>
                <img src="./data-image/${data[i].id}.jpeg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <br><br>
                <h5 class='texto'>${data[i].nombre}</h5>
                <p class='texto'>${data[i].autor}</p>
                </div>
            </div>`;
        }
        else{
            playlist += `<div class="carousel-item" onclick='reproducir(${data[i].id})'>
                <img src="./data-image/${data[i].id}.jpeg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <br><br>
                <h5 class='texto'>${data[i].nombre}</h5>
                <p class='texto'>${data[i].autor}</p>
                </div>
            </div>`;
        }
    }
    return playlist;
}

const reproducir = (id) => {
    let audioEtiqueta = document.querySelector("audio")
    audioEtiqueta.setAttribute("src", `./data/${id}.mp3`)
    audioEtiqueta.play();

}

const detener = () =>{
    let audio = document.querySelector("audio");
    audio.pause()
}

document.getElementById('playlist').innerHTML = addPlaylist();
