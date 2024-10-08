import React from 'react';

function WorkExperience({ experiences }) {
  return (
    <section className="work-experience">
      <h3>Work Experience</h3>
      <div className="jobs-list">
      {experiences.map((job, index) => (
        <div className="job" key={index}>
          <h3>{job.position} ({job.duration})</h3>
          <p>{job.description}</p>
        </div>
      ))}
      </div>
    </section>
  );
}

export default WorkExperience;
