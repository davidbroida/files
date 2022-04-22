import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/api';
import CompanyCard from './CompanyCard';
import SearchForm from '../search/SearchForm';
// import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  // useEffect(() => {
  //   async function getCompanies(name) {
  //     let companies = await JoblyApi.getCompanies();
  //     setCompanies(companies);
  //   }
  //   getCompanies();
  // }, []);

  useEffect(function getCompaniesOnLoad() {
    // console.debug('CompanyList useEffect getCompaniesOnLoad');
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <div>
      <SearchForm searchFor={search} />
      {companies.length ? (
        <div>
          {companies.map((company) => (
            <CompanyCard
              key={company.handle}
              handle={company.handle}
              name={company.name}
              description={company.description}
              logoUrl={company.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default CompanyList;
