import React from 'react';

function Skills({ skills }) {
  return (
    <section className="key-skills">
      <h3>Key Skills</h3>
      {skills.map((skillSet, index) => (
        <ul key={index}>
          {skillSet.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      ))}
    </section>
  );
}

export default Skills;

