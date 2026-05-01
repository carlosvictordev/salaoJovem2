import NavBar from "../pages/elements/Navbar";
import "../styles/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHouse, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Calendare(){
    const schedule = {
    "01": ["09:00", "10:00", "11:00"],
    "02": ["10:00", "14:00"],
    "03": ["09:00", "13:00", "16:00"]
  };
    const schedule2 = {
        "01": ["Júlio", "Victor", "Kaio"],
        "02": ["Júlio", "Victor"],
        "03": ["Kaio", "Victor", "Pedro"]
    };

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectPro, setSelectPro] = useState(null);

  const days = Object.keys(schedule, schedule2);
  const times = schedule[selectedDay];
  const pro = schedule2[selectedDay];

    return(
        <>
        <div className="container4">
            <NavBar/>
            <div className="calendare-geral">
      <h1 style={{ textAlign: "center" }}>Agende seu horário</h1>
      <br />
      <br />

      <div className="calendare">
        
        {/* DIAS */}
        <div className="days">
          <h2>Dias</h2>
          {days.map(day => (
            <button
              key={day}
              onClick={() => {
                setSelectedDay(day);
                setSelectedTime(null);
              }}
              style={{
                display: "block",
                margin: "10px 0",
                padding: "10px",
                background: selectedDay === day ? "#c59d5f" : "#ddd",
                color: "black"
              }}
            >
              Dia {day}
            </button>
          ))}
        </div>

        {/* HORÁRIOS */}
        <div className="times">
          <h2>Horários</h2>

          {!times && <p>Selecione um dia</p>}

          {times &&
            times.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                style={{
                  display: "block",
                  margin: "10px 0",
                  padding: "10px",
                  background:
                    selectedTime === time ? "#c59d5f" : "#ddd",
                    color: "black"
                }}
              >
                {time}
              </button>
            ))}
        </div>

        {/* Profissionáis */}
        <div className="pro">
          <h2>Profissionais</h2>

          {!pro && <p>Selecione um profissional</p>}

          {pro &&
            pro.map(pro => (
              <button
                key={pro}
                onClick={() => setSelectPro(pro)}
                style={{
                  display: "block",
                  margin: "10px 0",
                  padding: "10px",
                  background:
                    selectPro === pro ? "#c59d5f" : "#ddd",
                    color: "black"
                }}
              >
                {pro}
              </button>
            ))}
        </div>
        
        {/* RESUMO */}
        <div className="resume"> 
          <h2>Resumo</h2>

          {selectedDay && selectedTime && selectPro? (
            <p>
              Agendado para <strong>Dia {selectedDay}</strong> às{" "} <br />
              <strong>{selectedTime}</strong> com o barbeiro <strong>{selectPro}</strong>
            </p>
          ) : (
            <p>Selecione dia, horário e um profissional</p>
          )}
        </div>

      </div>
    </div>
            
        </div>
        </>
    )
}

export default Calendare;