let rootEl = document.getElementById("root");

fetch("https://xkcd.now.sh/?comic=latest")
.then((response) => {
    return response.json();  
})
.then((data) => {
    const imgEl = document.createElement("img");
    imgEl.src = data.img;
    imgEl.alt = data.alt;
    rootEl.appendChild(imgEl);
})
.catch((err) => {
    rootEl.innerText = "Something's went wrong" + err;
});