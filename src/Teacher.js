import { Person } from '../src/person';

const _subject = Symbol()
export class Teacher extends Person{

	constructor(firstName,surname,dateOfBirth,gender,subject){
        super(firstName,surname,dateOfBirth,gender);
		this[_subject] = subject;
    }

	introduction(){
		if(this.gender.toLowerCase() === 'male'){
			return `Hi!, I am Mr ${this.fullName} a ${this[_subject]} teacher`;
		}
		else{
			return `Hi!, I am Mrs ${this.fullName} a ${this[_subject]} teacher`;
		}
    }
};