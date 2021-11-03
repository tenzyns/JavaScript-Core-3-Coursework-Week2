const btn = document.createElement("button");
btn.textContent = "Click for a Paw";
btn.style.backgroundColor = "orange";
btn.style.width = "100px"
const dogDiv = document.getElementById("dog-img");
const unorderedLi = document.createElement("ul");
dogDiv.appendChild(btn);
dogDiv.appendChild(unorderedLi);

fetch("https://dog.ceo/api/breeds/image/random")
.then(function (response){
    return response.json();        
})
.then(function (dogImageUrl) {
    const liEl = document.createElement("li");
    const dogImg = document.createElement("img");
    dogImg.src = dogImageUrl.message;
    dogImg.alt = "";
    dogImg.style.width = "300px";
    liEl.appendChild(dogImg);        
    unorderedLi.appendChild(liEl);
    btn.addEventListener("click", () => {
        location.reload();
    });
})
.catch(function(error) {
    unorderedLi.innerHTML = "Somethings gone wrong," + error;
});
