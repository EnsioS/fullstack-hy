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

  addPerson = (event) => {
    event.preventDefault()
    let persons = this.state.persons        
    const isNewName = !(persons.find((person) => person.name === this.state.newName))
    
    if (isNewName) {     
      const person = {
        name: this.state.newName,
        number: this.state.newNumber
      }
      
      personService
        .create(person)
        .then(newPerson => {
          this.setState({
            persons: this.state.persons.concat(newPerson),
            newName: '',
            newNumber: ''
          })
        }) 
    } else {
      this.setState({
        persons: persons,
        newName: '',
        newNumber: ''
      })   
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
          addPerson={this.addPerson}
          newName={this.state.newName}  
          newNumber={this.state.newNumber}
          handleValueChange={this.handleValueChange}
        />
        <Numerot persons={personsToShow} />
      </div>
    )
  }
}

export default App
