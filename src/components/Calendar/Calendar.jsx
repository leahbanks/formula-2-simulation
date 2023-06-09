import "./Calendar.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { races } from "../../data/races";
import { Link } from "react-router-dom";

export default function Calendar() {
  return (
    <section className="calendar">
      <h1 className="title">
        SEASON CALENDAR <span>FORMULA 2 2023</span>
      </h1>
      <h2 className="scroll-heading">
        <AiOutlineLeft className="arrow" /> SCROLL TO SEE MORE RACES{" "}
        <AiOutlineRight className="arrow" />
      </h2>
      <ol>
        <div className="races-container">
          {races.map((race) => (
            <Link
              to={`/${race.id}`}
              style={{ textDecoration: "none" }}
              className="races"
              key={race.id}
            >
              <div>
                <img
                  className="flag"
                  src={race.img}
                  alt={`flag of ${race.country}`}
                />
                <h1 className="race-name">{race.name}</h1>
                <p className="dates">{race.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </ol>
    </section>
  );
}
