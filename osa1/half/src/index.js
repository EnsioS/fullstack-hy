import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Sisalto = (props) => {
  return (
    <div>
      {props.osat.map(osa => <Osa key={osa.id} osa={osa}/>)}
    </div>
  )
}

const Osa = (props) => <p>{props.osa.nimi} {props.osa.tehtavia}</p>

const Yhteensa = (props) => {
  const tehtavia = props.osat.reduce( (sum, osa) => sum + osa.tehtavia, 0)

  return (
    <p>yhteensä {tehtavia} tehtävää</p>
  )
}

const Kurssi = (props) => {
  return (
    <div>
      <Otsikko kurssi={props.kurssi} />
      <Sisalto osat={props.kurssi.osat} />
      <Yhteensa osat={props.kurssi.osat} />
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)