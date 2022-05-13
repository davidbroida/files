import React from 'react';

function Alert({ type = 'danger', messages = [] }) {
  return (
    <div>
      {messages.map((error) => (
        <p className="alert alert-danger" key={error}>{error}</p>
      ))}
    </div>
  );
}

export default Alert;