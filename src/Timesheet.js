import { useState } from "react";

const SUBJECTS = [
  "Linear Algebra",
  "Mechanical Vibrations",
  "Signals And Systems",
  "Compilers",
  "General Relativity",
  "Web Development",
];

const DailyTimesheet = () => {
  const [startTime, setStartTime] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <div className="daily-timesheet">
      <form>
        <label htmlFor="start-time">
          Start Time
          <input
            id="start-time"
            value={startTime}
            placeholder="Start Time"
            onChange={(e) => setStartTime(e.target.value)}
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
    </div>
  );
};

export default DailyTimesheet;
