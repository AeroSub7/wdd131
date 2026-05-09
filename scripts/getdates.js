const currentyear = document.querySelector("#currentyear");


const year = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
currentyear.innerHTML = `${year}`