import Person from '../src/Person.js';
import {Student} from '../src/Student.js';
import {Teacher} from '../src/Teacher.js';
import { expect } from 'chai';

describe('Person class: create a person',() => {
    
    let gbenga = new Student('gbenga','ode','30/06/1993','male','Bright Minds High');

    it('The person should be a type of "object", and an instance of the "person" class',() => {
        expect(typeof gbenga).to.eql('object');
    });

 
})
