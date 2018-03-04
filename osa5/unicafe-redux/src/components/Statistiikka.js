import React from 'react'

const Statistiikka = ({ store }) => {
  const palautteita = store.getState().good + store.getState().ok + store.getState().bad
  
  if (palautteita === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }
  
  const ka = () => {
    const sum = store.getState().good  - store.getState().bad
    return (palautteita === 0 ? 0 : sum / palautteita).toFixed(1)
  }

  const pos = () =>
    (palautteita === 0 ? 0 : 100 * store.getState().good / palautteita).toFixed(1)

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.getState().good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.getState().ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.getState().bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{ka()}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{pos()}</td>
          </tr>
        </tbody>
      </table>
  
      <button onClick={() => store.dispatch({type: 'ZERO'})}>nollaa tilasto</button>
    </div >
  )
}

export default Statistiikka