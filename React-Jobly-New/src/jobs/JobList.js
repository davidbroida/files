import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/api';
import JobCardList from './JobCardList';
import SearchForm from '../search/SearchForm';

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getJobsOnLoad() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div>
      <SearchForm searchFor={search} />
      {jobs.length ? <JobCardList jobs={jobs} /> : <p> No jobs found.</p>}
    </div>
  );
}

export default JobList;
