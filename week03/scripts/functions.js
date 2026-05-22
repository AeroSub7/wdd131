let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last) {
    return `${first} ${last}`;
}

let fullName = function (first, last) {
    return `${first} ${last}`;
}

let fullName = (first, last) => `${first} ${last}`;

document.querySelector('#fullName').textContent = fullName(firstName, lastName);