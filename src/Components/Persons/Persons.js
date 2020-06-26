import React from 'react';
import Person from './Person/Person';
const persons = (props) => {
        console.log('[persons.js] rendering...')
        return props.persons.map((person, index) => {
                return <Person
                        click={() => props.clicked(index)}
                        name={person.name} and
                        age={person.age}
                        key={person.id}
                        changed={(event) => props.changed(event, person.id)}
                />
        });
};

export default persons;