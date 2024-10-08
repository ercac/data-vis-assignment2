import React from 'react';

function Education({ education }) {
  return (
    <section className="education">
      <h3>Education</h3>
      <div className="education-list">
      {education.map((school, index) => (
        <div className="degree" key={index}>
          <h3>{school.degree}</h3>
          <p>{school.year}</p>
          <p>{school.institution}, GPA: {school.gpa}</p>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Education;

