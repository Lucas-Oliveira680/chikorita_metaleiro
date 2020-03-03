var spins = 0;
setInterval(() => {
    spins += 1;
    document.querySelector("#counter").innerHTML = spins;
},300)