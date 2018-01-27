import React from 'react'

const LisaaUusi = ({ handleFormSubmit, newName, newNumber, handleValueChange }) => {
  return (
    <div>      
      <h2>Lisää uusi/muuta olemassaolevan numeroa</h2>
      <form onSubmit={handleFormSubmit}>
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
  