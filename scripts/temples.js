const currentyear = document.querySelector("#currentyear");
const year = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
currentyear.innerHTML = `${year}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const heading = document.querySelector('h2');

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    heading.classList.toggle("open");
});