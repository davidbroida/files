import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <Link to={`/companies/${handle}`}>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <img scr={logoUrl} />
      </div>
    </Link>
  );
}

export default CompanyCard;
