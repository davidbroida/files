import React, { useState, useContext } from 'react';
import UserContext from '../auth/UserContext';

function JobCard({ id, title, salary, equity, companyName }) {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(
    function updateAppliedStatus() {
      setApplied(hasAppliedToJob(id));
    },
    [id, hasAppliedToJob]
  );

  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <div>
      <h6>{title}</h6>
      <p>{companyName}</p>
      {salary && (
        <div>
          <small>Salary: {addCommas(salary)}</small>
        </div>
      )}
      {equity !== undefined && (
        <div>
          <small>Equity: {equity}</small>
        </div>
      )}
      <button onClick={handleApply} disabled={applied}>
        {applied ? 'Applied' : 'Apply'}
      </button>
    </div>
  );
}

function addCommas(salary) {
  const digitsReversed = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digitsReversed.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digitsReversed.push(',');
  }
  return digitsReversed.reverse().join('');
}

export default JobCard;
