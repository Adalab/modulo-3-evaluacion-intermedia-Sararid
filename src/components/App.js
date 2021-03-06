// Fichero src/components/App.js
import "../styles/App.scss";
import { useState } from "react";
import dataEle from "../data/data.json";

function App() {
  const [week, setWeek] = useState("");
  const [newClubName, setNewClubName] = useState("");
  const [data, setData] = useState(dataEle);
  const [weekday, setWeekday] = useState(false);
  const [weekend, setWeekend] = useState(false);

  const handleWeekFilter = (ev) => {
    console.log(ev.target.value);
    const valueSelect = ev.target.value;
    setWeek(valueSelect);

  };

  const handleNewClubName = (ev) => {
    const valueSelect = ev.currentTarget.value;
    setNewClubName(valueSelect);
  };

  const handleWeekSelection = (ev) => {
    console.log(ev.target.id);
    if (ev.target.id === "weekday") {
      setWeekday(ev.target.checked);
    } else {
      setWeekend(ev.target.checked);
    }
  };


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
          <li key={index} id={club.index} className="listClubs__items--club">
            <p>#{index} {club.name} </p>
            <button onClick={handleRemoveBtn} >  <i className="far fa-times-circle" ></i></button>
            <p>abierto entre semana: {club.openOnWeekdays ? "sí" : "no"}</p>
            <p>abierto el fin de semana: {club.openOnWeekend ? "sí" : "no"}</p>
          </li>
        );
      });
  };

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
  };

  const handleRemoveBtn = (ev) => {
    ev.preventDefault();
    const id = ev.currentTarget.id
    data.splice(id, 1);
    setData([...data]);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Mis clubs</h1>
        <form onSubmit={handleOnSubmit}>
          <label className="header__input">
            Mostrar: </label>
          <select name="option" id="option" value={week} onChange={handleWeekFilter} className="header__input--select">
            <option value="all">Todos</option>
            <option value="weekDays">Abierto entre semana</option>
            <option value="weekEnds">Abierto el fin de semana</option>
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
            Nombre del club</label>
          <input className="addNewClub__form--input"
            type="text"
            name="newClubName"
            id="newClubName"
            value={newClubName}
            onChange={handleNewClubName}
          />


          <label className="addNewClub__formDetail"> </label>
          Abre entre semana?
          <input className="addNewClub__form--input"
            type="checkbox"
            name="weekDay"
            id="weekday"
            checked={weekday}
            onChange={handleWeekSelection}
          />

          <label>
            Abre los fines de semana? </label>
          <input className="addNewClub__form--input"
            type="checkbox"
            name="weeKend"
            id="weekend"
            checked={weekend}
            onChange={handleWeekSelection}
          />


          <input className="addNewClub__form--submit" type="submit" value="Añadir un nuevo club" onClick={handleClick} />
        </form>
      </section>

    </div>
  );
}

export default App;
