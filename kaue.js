var spins = 0;
setInterval(() => {
    spins += 1;
    document.querySelector("#counter").innerHTML = spins;
},350)


var audio = document.getElementById("myaudio");
audio.volume = 0.1;