// Fichero src/components/App.js

import '../styles/App.scss';
import { useEffect, useState } from 'react';
import dataEle from '../data/data.json'


function App() {

  const [week, setWeek] = useState(''); //este es el de options de semana
  const [newClubName, setNewClubName] = useState(''); //esto para el input donde escribo el club a añadir
  const [data, setData] = useState(dataEle);

  console.log(data)
  //esta funcion es para el select
  const handleWeek = (ev) => {
    const valueSelect = ev.target.value
    setWeek(valueSelect)

  }

  //esta funcion es para el input de añadir el nuevo club

  const handleNewClubName = (ev) => {
    const valueSelect = ev.currentTarget.value
    setNewClubName(valueSelect)

  }

  //funcion para pintar los clubes del data json en pantalla

  const renderClubs = () => {
    return data.map((club, index) => {

      return <li><p>#0 {club.name} </p><i className="far fa-times-circle"></i>
        <p>abierto entre semana: {club.openOnWeekdays ? 'sí' : 'no'}</p>
        <p>abierto el fin de semana: {club.openOnWeekend ? 'sí' : 'no'}</p></li>
    })
  }


  // añadir un  nuevo club tengo que recoger 3 info =>> el nombre 



  return (
    <div>
      <h1 className="title">Mis clubs</h1>

      <label>Mostrar
        <select name="option" id="option" onChange={handleWeek}>
          <option value='todos'>todos</option>
          <option value='weekDays'>los que abren entre semana</option>
          <option value='weekEnds'>los que abren el fin de semana</option>
        </select>
      </label>

      <div> <ul> {renderClubs()} </ul></div>


      <h2>Añadir un nuevo club</h2>

      <label htmlFor="NewClubName"> Nombre del club
        <input type="text" name="newClubName" id="newClubName" value={newClubName} onChange={handleNewClubName} />
      </label>
      <label htmlFor=" ">Abre entre semana?
        <input type="checkbox" name="" id="" /></label>
      <label htmlFor=""> Abre los fines de semana?<input type="checkbox" name="" id="" /> </label>

      <input type="submit" value="Añadir un nuevo club" onClick={handleClick} />
    </div>
  );
}

export default App;