const visitsDisplay = document.querySelector("#count")

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.innerHTML = `You have made ${numVisits} reviews. Thank you!`;
}
else {
    visitsDisplay.innerHTML = `This is your first review. Thank you!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);