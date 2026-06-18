const currentyear = document.querySelector("#currentyear");
const year = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
currentyear.innerHTML = `${year}`;

function timeLapse() {
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;
    if (numVisits == 35) { numVisits = 1; };
    numVisits = lapse(numVisits);
    localStorage.setItem("numVisits-ls", numVisits);


}

function lapse(slide) {
    const time1 = document.querySelector('#lapse1');
    const time2 = document.querySelector('#lapse2');
    time1.setAttribute('src', `images/timelapse-${slide}.webp`)
    time1.setAttribute('alt', `AeroSub's Factory TL ${slide}`)
    slide++;
    time2.setAttribute('src', `images/timelapse-${slide}.webp`)
    time2.setAttribute('alt', `AeroSub's Factory TL ${slide}`)
    slide++;
    return slide;
}

timeLapse();