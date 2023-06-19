import { races } from "../../data/races";
import { useParams } from "react-router-dom";
import "./RaceInfo.css";

export const RaceInfo = () => {
  const { race_id } = useParams();

  let raceById = races.filter((race) => race.id === Number(race_id));
  let currentRace = raceById[0];

  return (
    <section className="race-page">
      <section className="race-info">
        <div
          className="background-img"
          style={{
            height: "400px",
            width: "100%",
            backgroundImage: `url(${currentRace.circuitImg})`,
          }}
        >
          <div className="race-details">
            <div className="country">
              <img
                className="flag-race-page"
                src={currentRace.img}
                alt={`flag of ${currentRace.country}`}
              />{" "}
              <span>{currentRace.country}</span>
              <div className="city-and-round">
                <p className="city-name">{currentRace.name}</p>
                <p className="round-date">
                  ROUND {currentRace.id} | {currentRace.date}
                </p>
              </div>
            </div>

            <div className="race-results">
              <h3 className="standings-title">
                {" "}
                ROUND {currentRace.id} SUMMARY
              </h3>
              <ol className="grid" style={{ listStyle: "none" }}>
                <li>FREE PRACTICE</li>
                <span>
                  {currentRace.round1Summary[0].freePractice[0]}{" "}
                  {currentRace.round1Summary[0].freePractice[1]}
                </span>
                <li>QUALIFYING SESSION</li>
                <span>
                  {currentRace.round1Summary[1].qualifyingSession[0]}{" "}
                  {currentRace.round1Summary[1].qualifyingSession[1]}
                </span>
                <li>SPRINT RACE</li>
                <span>
                  {currentRace.round1Summary[2].sprintRace[0]}{" "}
                  {currentRace.round1Summary[2].sprintRace[1]}
                </span>
                <li>FEATURE RACE</li>
                <span>
                  {currentRace.round1Summary[3].featureRace[0]}{" "}
                  {currentRace.round1Summary[3].featureRace[1]}
                </span>
              </ol>
            </div>
            <div className="standings">
              <h3 className="standings-title">
                STANDINGS AFTER ROUND {currentRace.id}
              </h3>
              <ol className="grid-2" style={{ listStyle: "none" }}>
                <li> 1ST</li>
                <span>
                  {currentRace.standings[0].first[0]}{" "}
                  {currentRace.standings[0].first[1]}
                </span>
                <li>2ND</li>
                <span>
                  {currentRace.standings[1].second[0]}{" "}
                  {currentRace.standings[1].second[1]}
                </span>
                <li>3RD</li>
                <span>
                  {currentRace.standings[2].third[0]}{" "}
                  {currentRace.standings[2].third[1]}
                </span>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="circuit-section">
        <div
          className="circuit-stats-background"
          style={{
            backgroundImage: `url('https://www.fiaformula2.com/_next/static/images/circuit-header-block-full-new-1223d98f88c7e7be0e16a51f05a9b5b0.png')`,
          }}
        >
          <h1>{currentRace.circuit}</h1>
          <div className="circuit-details">
            <img
              className="circuit-map"
              style={{ justifyContent: "left" }}
              src={currentRace.circuitMap}
              alt={`map of ${currentRace.circuit}`}
            />
            <div className="circuit-stats">
              <h4>
                First F2 Race <p>{currentRace.firstRace}</p>
              </h4>
              <h4>
                Circuit Length <p>{currentRace.circuitLength}</p>
              </h4>
              <h4>
                Sprint Race <p>{currentRace.sprintRace[0]}</p>
                <p>{currentRace.sprintRace[1]}</p>
              </h4>
              <h4>
                Feature Race <p>{currentRace.featureRace[0]}</p>{" "}
                <p>{currentRace.featureRace[1]}</p>
              </h4>
              <h3>
                Circuit Records <h4>F2 Fastest Lap</h4>{" "}
                <p>{currentRace.circuitRecords[0].f2FastestLap[0]}</p>{" "}
                <p>
                  {currentRace.circuitRecords[0].f2FastestLap[1]} •{" "}
                  {currentRace.circuitRecords[0].driver}
                </p>
                <p>{currentRace.circuitRecords[0].date}</p>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
