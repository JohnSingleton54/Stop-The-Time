import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
import SearchParam from "./SearchParam";
import Timesheet from "./Timesheet";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Stop The Time!</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParam />} />
          <Route path="/timesheet:id" element={<Timesheet />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
