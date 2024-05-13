import { Component } from 'react';
import './App.css';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPeople: [{
        firstName: "Jane",
        lastName: "Doe",
        age: "45",
        hairColor: "Black"
      },
      {
        firstName: "John",
        lastName: "Smith",
        age: "88",
        hairColor: "Brown"
      },
      {
        firstName: "Millard",
        lastName: "Fillmore",
        age: "50",
        hairColor: "Brown"
      },
      {
        firstName: "Maria",
        lastName: "Smith",
        age: "62",
        hairColor: "Brown"
      }]
    }
  }
  render = () => {
    return (
      <div>
        <ul>
          {this.state.listPeople.map((people, index) => {
            return (
              <li key={index}>
                <h2>{people.lastName}, {people.firstName}</h2>
                <p>Age: {people.age}</p>
                <p>Hair color: {people.hairColor}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PersonCard;
