// Create a Person class that stores a person’s name and their gender. Create a list of
// at least 10 Person objects. Write a function that displays all the people in the list of
// the same gender.

const list = require('./list');

const personsList = new list.List();
const persons = [
    {
        name: 'Alex',
        gender: 'm'
    },
    {
        name: 'John',
        gender: 'm'
    },
    {
        name: 'Peter',
        gender: 'm'
    },
    {
        name: 'Bob',
        gender: 'm'
    },
    {
        name: 'Dave',
        gender: 'm'
    },
    {
        name: 'Ira',
        gender: 'f'
    },
    {
        name: 'Valia',
        gender: 'f'
    },
    {
        name: 'Tanya',
        gender: 'f'
    },
    {
        name: 'Masha',
        gender: 'f'
    },
    {
        name: 'Ola',
        gender: 'f'
    }
]

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function displayNamesByGender(gender) {
    
    for(personsList.front(); personsList.currPos() < personsList.length(); personsList.next()) {
        if (personsList.dataStore[personsList.currPos()].gender === gender) console.log(personsList.dataStore[personsList.currPos()].name)
        if(personsList.currPos() == personsList.length() - 1) break;   
    }
}

persons.forEach(person => personsList.append(new Person(person.name, person.gender)));

displayNamesByGender('f');

