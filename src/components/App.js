// Fichero src/components/App.js

import "../styles/App.scss";
import { useState } from "react";
import dataEle from "../data/data.json";

function App() {
  const [week, setWeek] = useState(""); //este es el de options de semana
  const [newClubName, setNewClubName] = useState(""); //esto para el input donde escribo el club a añadir
  const [data, setData] = useState(dataEle);
  const [weekday, setWeekday] = useState(false);
  const [weekend, setWeekend] = useState(false);

  //esta funcion es para el select
  const handleWeekFilter = (ev) => {
    console.log(ev.target.value);
    const valueSelect = ev.target.value;
    setWeek(valueSelect);

  };

  //esta funcion es para el input de añadir el nuevo club

  const handleNewClubName = (ev) => {
    const valueSelect = ev.currentTarget.value;
    setNewClubName(valueSelect);
  };

  // handle selection for new club
  const handleWeekSelection = (ev) => {
    console.log(ev.target.id);
    if (ev.target.id === "weekday") {
      setWeekday(ev.target.checked);
    } else {
      setWeekend(ev.target.checked);
    }
  };
  // funcion borrar cada club 


  const handleRemoveBtn = (ev) => {
    ev.preventDefault();
    const parentLiId = ev.currentTarget.parentElement.id;
    data.splice(parentLiId, 1);
    setData([...data]);
  };

  //funcion para pintar los clubes del data json en pantalla

  const renderClubs = () => {
    return data
      .filter(club => {
        if (week === 'weekDays') {
          return club.openOnWeekdays

        } else if (week === 'weekEnds') {
          return club.openOnWeekend
        } else {
          return club.openOnWeekend || club.openOnWeekdays || !club.openOnWeekend || !club.openOnWeekdays

        }
      })
      .map((club, index) => {
        return (
          <li key={index} className="listClubs__items--club">
            <p>#{index} {club.name} </p>
            <button onClick={handleRemoveBtn}>  <i className="far fa-times-circle" ></i></button>
            <p>abierto entre semana: {club.openOnWeekdays ? "sí" : "no"}</p>
            <p>abierto el fin de semana: {club.openOnWeekend ? "sí" : "no"}</p>
          </li>
        );
      });
  };

  // añadir un  nuevo club tengo que recoger 3 info =>> el nombre y checkboxes

  const handleClick = (ev) => {
    ev.preventDefault();
    const newClub = {
      name: newClubName,
      openOnWeekdays: weekday,
      openOnWeekend: weekend,
    };
    setData([...data, newClub]);
    setNewClubName("");
    setWeekday(false);
    setWeekend(false);
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Mis clubs</h1>
        <form onSubmit={handleOnSubmit}>
          <label className="header__input">
            Mostrar </label>
          <select name="option" id="option" value={week} onChange={handleWeekFilter} className="header__input--select">
            <option value="all">todos</option>
            <option value="weekDays">los que abren entre semana</option>
            <option value="weekEnds">los que abren el fin de semana</option>
          </select>

        </form>
      </header>

      <section className="listClubs">
        <ul className="listClubs__items"> {renderClubs()} </ul>
      </section>

      <section className="addNewClub">
        <h2>Añadir un nuevo club</h2>
        <form className="addNewClub__form">
          <label>
            Nombre del club
            <input className="addNewClub__form--input"
              type="text"
              name="newClubName"
              id="newClubName"
              value={newClubName}
              onChange={handleNewClubName}
            />
          </label>

          <label className="addNewClub__formDetail">
            Abre entre semana?
            <input className="addNewClub__form--input"
              type="checkbox"
              name="weekDay"
              id="weekday"
              checked={weekday}
              onChange={handleWeekSelection}
            />
          </label>
          <label>
            Abre los fines de semana?
            <input className="addNewClub__form--input"
              type="checkbox"
              name="weeKend"
              id="weekend"
              checked={weekend}
              onChange={handleWeekSelection}
            />
          </label>

          <input type="submit" value="Añadir un nuevo club" onClick={handleClick} />
        </form>
      </section>

    </div>
  );
}

export default App;
