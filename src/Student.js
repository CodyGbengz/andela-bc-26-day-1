import { Person } from './Person';

const _school = Symbol();

export class Student extends Person{
    constructor(firstName,surname,dateOfBirth,gender,school){
        super(firstName,surname,dateOfBirth,gender);
		this[_school] = school;
		
	}

	introduction(){
		return `Hi!, I am ${this.fullName} and I am a student of ${this[_school]}`;
	}
};