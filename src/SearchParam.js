import { useState, useEffect } from "react";
import Results from "./Results";

const SUBJECTS = [
  "Linear Algebra",
  "Mechanical Vibrations",
  "Signals And Systems",
  "Compilers",
  "General Relativity",
  "Web Development",
];

//const LOCATIONS = ["Bozeman, MT", "Las Vegas, MT"];

const SearchParam = () => {
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [times, setTimes] = useState([]);

  useEffect(() => {
    requestTimes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestTimes() {
    /* const res = await fetch();
    const json = await res.json();

    setTimes(json.times); */

    if (subject == "Compilers") {
      setTimes(["8:00", "10:00"]);
    } else {
      setTimes([]);
    }
  }

  return (
    <div className="search-param">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //setSubject(e.target.value);
          requestTimes();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="subject">
          Subject
          <select
            id="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            onBlur={(e) => {
              setSubject(e.target.value);
            }}
          >
            <option />
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {subject ? <Results times={times} /> : <div></div>}
    </div>
  );
};

export default SearchParam;

// {subject ? <Results times={times} subject={subject} /> : <div></div>}
