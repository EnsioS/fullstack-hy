import React from 'react'
// import axios from 'axios'
import personService from './services/persons'
import Numerot from './components/Numerot'
import RajaaNaytettavia from './components/RajaaNaytettavia'
import LisaaUusi from './components/LisaaUusi'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response})
      })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    let persons = this.state.persons        
    const knownPerson = persons.find((person) => person.name === this.state.newName)
    
    const person = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    if (knownPerson) {                 
      this.updatePerson(knownPerson.id, person)
    } else {
      this.addPerson(person)
    } 
  }
  
  updatePerson = (id, person) => {
    if (window.confirm(person.name + " on jo luettelossa, korvataanko vanha numero uudella?")) {
    personService
      .update(id, person)
      .then(knownPerson => {
        const persons = this.state.persons.filter(n => n.id !== id)
        this.setState({
          persons: persons.concat(knownPerson),
          newName: '',
          newNumber: ''
        })
      })
    }       
  }

  addPerson = (person) => {
    personService
      .create(person)
      .then(newPerson => {
        this.setState({
          persons: this.state.persons.concat(newPerson),
          newName: '',
          newNumber: ''
        })
      }) 
  }

  deletePerson = (person) => {
    return () => {
      if (window.confirm("poistetaanko " + person.name)) {
        let persons = this.state.persons.filter(Person => Person.id !== person.id)
        personService
          .destroy(person.id)
          .then(
            this.setState({
              persons: persons,
            })
          )
      }
    }
  } 

  handleValueChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })    
  }

  render() {
    const personsToShow =
      this.state.persons
      .filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <RajaaNaytettavia 
          filter={this.state.filter}
          handleValueChange={this.handleValueChange}
        />
        <LisaaUusi
          handleFormSubmit={this.handleFormSubmit}
          newName={this.state.newName}  
          newNumber={this.state.newNumber}
          handleValueChange={this.handleValueChange}
        />
        <Numerot 
          persons={personsToShow} 
          deletePerson={this.deletePerson}
        />
      </div>
    )
  }
}

export default App
