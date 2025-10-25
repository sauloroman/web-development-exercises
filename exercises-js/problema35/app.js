let num = Math.random() * 3;
num = parseInt(num);
let site;
let name;

if (num == 0) {
    site = 'https://www.outlook.com';
    namesite = 'outlook';
} else if (num == 1) {
    site = 'https://www.gmail.com';
    namesite = 'gmail';
} else {
    site = 'https://mail.yahoo.com';
    namesite = 'yahoo';
}

alert('La pag cargada es: ' + namesite);

function irWebmailAleatorio() {
    window.location = site;

}