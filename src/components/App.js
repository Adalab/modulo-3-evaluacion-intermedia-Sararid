// Fichero src/components/App.js

import '../styles/App.scss';
import { useEffect, useState } from 'react';
import dataEle from '../data/data.json'


function App() {

  const [week, setWeek] = useState(''); //este es el de options de semana
  const [newClubName, setNewClubName] = useState(''); //esto para el input donde escribo el club a añadir
  const [data, setData] = useState(dataEle);
  const [weekday, setWeekday] = useState(false);
  const [weekend, setWeekend] = useState(false);



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

  // handle selection for new club 
  const handleWeekSelection = (ev) => {
    console.log(ev.target.id)
    if (ev.target.id === 'weekday') {
      setWeekday(ev.target.checked);
    } else {
      setWeekend(ev.target.checked);
    }
  };
  //funcion para pintar los clubes del data json en pantalla

  const renderClubs = () => {
    return data.map((club, index) => {

      return <li key={index}><p>#0 {club.name} </p><i className="far fa-times-circle"></i>
        <p>abierto entre semana: {club.openOnWeekdays ? 'sí' : 'no'}</p>
        <p>abierto el fin de semana: {club.openOnWeekend ? 'sí' : 'no'}</p></li>
    })
  }



  // añadir un  nuevo club tengo que recoger 3 info =>> el nombre y checkboxes

  const handleClick = (ev) => {
    ev.preventDefault();

    const newClub = {
      "name": newClubName,
      "openOnWeekdays": weekday,
      "openOnWeekend": weekend,

    };

    setData([...data, newClub]);

    setNewClubName('');
    setWeekday(false);
    setWeekend(false);


    console.log(data);
  };


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

      <label > Nombre del club
        <input type="text" name="newClubName" id="newClubName" value={newClubName} onChange={handleNewClubName} />
      </label>

      <label >Abre entre semana?
        <input type="checkbox" name="weekDay" id="weekday" checked={weekday} onChange={handleWeekSelection} />
      </label>
      <label > Abre los fines de semana?
        <input type="checkbox" name="weeKend" id="weekend" checked={weekend} onChange={handleWeekSelection} />
      </label>

      <input type="submit" value="Añadir un nuevo club" onClick={handleClick} />
    </div>
  );
}

export default App;