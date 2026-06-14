const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Елена",
            "id_4": "Дарья",
            "id_5": "Анастасия",
            "id_6": "Ольга",
            "id_7": "Екатерина",
            "id_8": "Виктория",
            "id_9": "Наталья",
            "id_10": "Полина"
        }
    }`,
    
    professionMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Шахтёр",
            "id_2": "Слесарь",
            "id_3": "Солдат",
            "id_4": "Программист",
            "id_5": "Инженер"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Учительница",
            "id_2": "Врач",
            "id_3": "Дизайнер",
            "id_4": "Программист",
            "id_5": "Актриса"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },

    randomGender: function() {
        return this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomBirthYear: function() {
        return this.randomIntNumber(2000, 1950);
    },

    randomBirthDate: function() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        const monthIndex = this.randomIntNumber(11, 0);
        
        let daysInMonth;
        if (monthIndex === 1) {
            daysInMonth = 28;
        } else if (monthIndex === 3 || monthIndex === 5 || monthIndex === 8 || monthIndex === 10) {
            daysInMonth = 30;
        } else {
            daysInMonth = 31;
        }

        const day = this.randomIntNumber(daysInMonth, 1);
        return `${day} ${months[monthIndex]}`;
    },

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {
        let surname = this.randomValue(this.surnameJson);
        if (this.person.gender === this.GENDER_FEMALE) {
            return surname + 'а';
        } else {
            return surname;
        }
    },

    randomPatronymic: function() {
        let baseName = this.randomValue(this.firstNameMaleJson);
        let patronymic = '';

        if (this.person.gender === this.GENDER_MALE) {
            if (baseName.endsWith('й')) {
                patronymic = baseName.slice(0, -1) + 'евич';
            } else if (baseName.endsWith('а')) {
                patronymic = baseName.slice(0, -1) + 'ич';
            } else {
                patronymic = baseName + 'ович';
            }
        } else {
            if (baseName.endsWith('й')) {
                patronymic = baseName.slice(0, -1) + 'евна';
            } else if (baseName.endsWith('а')) {
                patronymic = baseName.slice(0, -1) + 'ична';
            } else {
                patronymic = baseName + 'овна';
            }
        }
        return patronymic.replace('Михаилович', 'Михайлович').replace('Михаиловна', 'Михайловна');
    },

    randomProfession: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomBirthYear();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};