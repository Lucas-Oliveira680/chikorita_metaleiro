var spins = 0;
setInterval(() => {
    spins += 1;
    document.querySelector("#counter").innerHTML = spins;
},350)


var audio = document.getElementById("myaudio");
audio.volume = 0.1;

window.alert("A musica por algum motivo nao funciona no Chrome. A magia apenas ocorre sem ele :)")