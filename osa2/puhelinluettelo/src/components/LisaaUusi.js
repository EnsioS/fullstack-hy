import React from 'react'

const LisaaUusi = ({ addPerson, newName, newNumber, handleValueChange }) => {
  return (
    <div>      
      <h2>Lisää uusi</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: 
          <input 
            id="newName"
            value={newName}
            onChange={handleValueChange}
          />
        </div>
        <div>
          numero:
          <input
            id="newNumber"
            value={newNumber}
            onChange={handleValueChange}
          />    
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  )    
}

export default LisaaUusi
  