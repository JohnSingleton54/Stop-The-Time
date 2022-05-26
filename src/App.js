import { render } from "react-dom";
import DailyTimesheet from "./DailyTimesheet";

const App = () => {
  return (
    <div>
      <h1>Stop the time!</h1>
      <DailyTimesheet />
    </div>
  );
};

render(<App />, document.getElementById("root"));
