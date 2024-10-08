import React from 'react';

function Header({ name, jobTitle, contact }) {
  return (
    <section className="profile">
      <div className="name">
        <h2>{name}</h2>
        <h3>{jobTitle}</h3>
      </div>
      <div className="info">
        <p>Email: {contact.email}</p>
        <p>Web: <a href={contact.website}>{contact.website}</a></p>
        <p>Mobile: {contact.mobile}</p>
      </div>
    </section>
  );
}

export default Header;

