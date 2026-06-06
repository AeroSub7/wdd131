const currentyear = document.querySelector("#currentyear");
const year = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = `Last Modification: ${document.lastModified}`;
currentyear.innerHTML = `${year}`;