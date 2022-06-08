const Results = ({ times, subject }) => {
  return (
    <div>
      {!times.length ? (
        <h1>You haven&apos;t studied {subject} yet this week.</h1>
      ) : (
        times
      )}
    </div>
  );
};

export default Results;
