import "./Scoreboard.css";
import { races } from "../../data/races";
import { useParams } from "react-router-dom";

export const Scoreboard = () => {
  const { race_id } = useParams();
  let raceById = races.filter((race) => race.id === Number(race_id));
  let currentRace = raceById[0];

  return (
    <section className="results-page">
      <h1 className="scoreboard-title">
        {currentRace.name} RESULTS <span>FORMULA 2 2023</span>
      </h1>
      <section className="scoreboard-wrapper">
        <div className="scoreboard">
          <h2>
            FEATURE RACE <span>RESULTS</span>
          </h2>
          <table class="driver-results">
            <tr className="headings">
              <th>
                <h3>POS</h3>
              </th>
              <th>Number / Driver</th>
              <th>LAPS</th>
              <th>TIME</th>
              <th>GAP</th>
              <th>INT.</th>
              <th>KPH</th>
              <th>BEST</th>
              <th>LAP</th>
            </tr>
            <tr>
              <td>1</td>
              <td>5 *driver name*</td>
              <td>32</td>
              <td>1:01:10.926</td>
              <td>-</td>
              <td>-</td>
              <td>169.596</td>
              <td>1:47.689</td>
              <td>17</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5 *driver name*</td>
              <td>32</td>
              <td>1:01:10.926</td>
              <td>-</td>
              <td>-</td>
              <td>169.596</td>
              <td>1:47.689</td>
              <td>17</td>
            </tr>
            <tr>
              <td>3</td>
              <td> 5 *driver name*</td>
              <td>32</td>
              <td>1:01:10.926</td>
              <td>-</td>
              <td>-</td>
              <td>169.596</td>
              <td>1:47.689</td>
              <td>17</td>
            </tr>
          </table>
        </div>
      </section>
    </section>
  );
};
