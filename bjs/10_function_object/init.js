function renderPerson() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthDate + " " + initPerson.birthYear + " года рождения";
    document.getElementById('professionOutput').innerText = initPerson.profession;
}

window.onload = function() {
    renderPerson();
};

document.getElementById('btnRetry').addEventListener('click', function() {
    renderPerson();
});

document.getElementById('btnClear').addEventListener('click', function() {
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('patronymicOutput').innerText = 'Отчество';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('professionOutput').innerText = 'Генерация профессии';
});