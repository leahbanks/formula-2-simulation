import "./Calendar.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export default function Calendar() {
  return (
    <section className="calendar">
      <h1 className="title">
        SEASON CALENDAR <span>FORMULA 2 2023</span>
      </h1>
      <h2 className="scroll-heading"><AiOutlineLeft className="arrow"/> SCROLL TO SEE MORE RACES <AiOutlineRight className="arrow"/></h2>
    </section>
  );
}
