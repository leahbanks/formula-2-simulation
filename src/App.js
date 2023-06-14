import "./App.css";
import Header from "./components/Header/Header";
import Calendar from "./components/Calendar/Calendar";
import { Route, Routes } from "react-router-dom";
import { RaceInfo } from "./components/RaceInfo/RaceInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Calendar/>
      <Routes>
        {" "}
          <Route
            path=":race_id"
            element={<RaceInfo/>}
          ></Route>;
      </Routes>
      
    </div>
  );
}

export default App;
