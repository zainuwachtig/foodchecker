const kaart = document.querySelector('main');

function draaiKaartOm() {
    kaart.classList.toggle('erIsOpMijGeklikt');
}

kaart.addEventListener('click', draaiKaartOm);