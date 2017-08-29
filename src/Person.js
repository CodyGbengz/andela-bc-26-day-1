const _firstName = Symbol();
const _surname = Symbol();
const _dateOfBirth = Symbol();
const _gender = Symbol();

export class Person{
	constructor(firstName,surname,dateOfBirth,gender){
		this[_firstName] = firstName;
		this[_surname] = surname;
		this[_dateOfBirth] = dateOfBirth;
		this[_gender] =  gender;
		
	}

	get gender(){
		return this[_gender];
	}

	get age(){
		return this.calcAge();
	}

	calcAge(){
        let [day,month,year] = this[_dateOfBirth].split('/');
        return new Date().getFullYear() - year;
	}


	get fullName(){
		return `${this[_surname]} ${this[_firstName]}`; 
	}

	introduction(){
		return ` Hello, I am ${this.fullName}`;
	}

};

