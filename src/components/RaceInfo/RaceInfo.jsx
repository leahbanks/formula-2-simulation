import { races } from "../../data/races";
import { useParams } from "react-router-dom";
import "./RaceInfo.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";

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
              <div>
                <h4>First F2 Race</h4>
                <p className="value skew-border">
                  <span>{currentRace.firstRace}</span>
                </p>
              </div>

              <div>
                <h4>Circuit Length</h4>
                <p className="value skew-border">
                  <span>{currentRace.circuitLength}</span>
                </p>
              </div>

              {currentRace.sprintRace !== undefined ? (
                <div>
                  <h4>Sprint Race</h4>
                  <p className="value-no-skew">{currentRace.sprintRace[0]}</p>
                  <p className="value-light skew-border">
                    <span>{currentRace.sprintRace[1]}</span>
                  </p>
                </div>
              ) : null}

              {currentRace.featureRace !== undefined ? (
                <div>
                  <h4>Feature Race</h4>
                  <p className="value-no-skew">{currentRace.featureRace[0]}</p>
                  <p className="value-light skew-border">
                    <span>{currentRace.featureRace[1]}</span>
                  </p>
                </div>
              ) : null}

              <div>
                <p className="circuit-records-heading">Circuit Records</p>
                <h4>F2 Fastest Lap</h4>
                <p className="value-no-skew">
                  {currentRace.circuitRecords[0].f2FastestLap[0]}
                </p>
                {!currentRace.circuitRecords[0].f2FastestLap[1] ? (
                  <span className="na">N/A</span>
                ) : (
                  <p className="circuit-records-p">
                    <span>
                      {currentRace.circuitRecords[0].f2FastestLap[1]} •{" "}
                      {currentRace.circuitRecords[0].driver}
                    </span>
                    <p className="record-date skew-border">
                      <span>{currentRace.circuitRecords[0].date}</span>
                    </p>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Scoreboard />
    </section>
  );
};
