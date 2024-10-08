import React from 'react';

function PersonalProfile({ profile }) {
  return (
    <section className="personal-profile">
      <h3>Personal Profile</h3>
      <p>{profile}</p>
    </section>
  );
}

export default PersonalProfile;
