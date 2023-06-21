import "./Scoreboard.css";
import { races } from "../../data/races";
import { useParams } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

export const Scoreboard = () => {
  const { race_id } = useParams();
  let raceById = races.filter((race) => race.id === Number(race_id));
  let currentRace = raceById[0];

  return (
    <section className="results-page">
      <h1 className="scoreboard-title">
        {currentRace.name} RESULTS <span>FORMULA 2 2023</span>
      </h1>
      <div className="winners">
        <div className="sprint-race">
          <h4>Sprint Race Winner</h4>
          <img
            className="winner-photo"
            src="https://res.cloudinary.com/prod-f2f3/ar_16:9,c_fill,dpr_1.0,f_auto,g_auto,h_338,w_600/v1/f2/global/drivers/2023/BRYN3844_d353d21f-d5c2-4e57-9965-d319a21e97f8_ED_ea6dfd7b-73be-48c3-8cc6-d2b82f4be14f"
            alt="photo of sprint race winner"
          />
          <div className="driver-profile-info">
            <h2 className="driver-profile-info-name">
              <span>Campos Racing</span>
              <br></br>Ralph Boschung <AiOutlineRight className="chevron" />
            </h2>
          </div>
        </div>

        <div className="feature-race">
          <h4>Feature Race Winner</h4>
          <img
            src="https://res.cloudinary.com/prod-f2f3/ar_16:9,c_fill,dpr_1.0,f_auto,g_auto,h_338,w_600/v1/f2/global/drivers/2023/BRYN4731_b3917b81-edeb-4e34-b8d2-c7c339ce47c0_ED_219dc208-33b6-4ece-8884-3460578220e4"
            alt="photo of sprint race winner"
          ></img>
          <div className="driver-profile-info">
            <h2 className="driver-profile-info-name">
              <span>Campos Racing</span>
              <br></br>Ralph Boschung <AiOutlineRight className="chevron" />
            </h2>
          </div>
        </div>
      </div>

      <section className="scoreboard-wrapper">
        <div className="scoreboard">
          <h2>
            FEATURE RACE <span>RESULTS</span>
          </h2>
          <div className="view">
            <div className="wrapper">
              <table className="driver-results">
                <thead>
                  <tr>
                    <th className="sticky-col first-col">POS</th>
                    <th className="sticky-col second-col">Number / Driver</th>
                    <th className="heading">LAPS</th>
                    <th className="heading">TIME</th>
                    <th className="heading">GAP</th>
                    <th className="heading">INT.</th>
                    <th className="heading">KPH</th>
                    <th className="heading">BEST</th>
                    <th className="heading">LAP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="results">
                    <td className="sticky-col pos">1</td>
                    <td className="sticky-col driver-name">5 DRIVER NAME</td>
                    <td>32</td>
                    <td>1:01:10.926</td>
                    <td>-</td>
                    <td>-</td>
                    <td>169.596</td>
                    <td>1:47.689</td>
                    <td>17</td>
                  </tr>
                  <tr className="results">
                    <td className="sticky-col pos">2</td>
                    <td className="sticky-col driver-name">5 DRIVER NAME</td>
                    <td>32</td>
                    <td>1:01:10.926</td>
                    <td>-</td>
                    <td>-</td>
                    <td>169.596</td>
                    <td>1:47.689</td>
                    <td>17</td>
                  </tr>
                  <tr className="results">
                    <td className="sticky-col pos">3</td>
                    <td className="sticky-col driver-name">5 DRIVER NAME</td>
                    <td>32</td>
                    <td>1:01:10.926</td>
                    <td>-</td>
                    <td>-</td>
                    <td>169.596</td>
                    <td>1:47.689</td>
                    <td>17</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
