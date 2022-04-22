import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api/api';
import JobCardList from '../jobs/JobCardList';

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function getCompanyInfo() {
      async function getCompany() {
        let company = await JoblyApi.getCompany(handle);
        setCompany(company);
      }

      getCompany();
    },
    [handle]
  );

  if (!company)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div>
      <h4>{company.name}</h4>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
