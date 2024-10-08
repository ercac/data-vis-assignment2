import React from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

function App() {
  const resumeData = {
    name: 'Zh Rimel',
    jobTitle: 'Data Scientist',
    contact: {
      email: 'abc@gmail.com',
      website: 'https://abc.github.io/abc',
      mobile: '01234567890'
    },
    personalProfile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    workExperience: [
      {
        position: 'Job Title at Company',
        duration: 'August 2022 - December 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        position: 'Job Title at Company',
        duration: 'August 2020 - December 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ],
    skills: [
      ['Key Skill', 'Key Skill', 'Key Skill'],
      ['Key Skill', 'Key Skill', 'Key Skill'],
      ['Key Skill', 'Key Skill', 'Key Skill']
    ],
    education: [
      {
        degree: 'BS in Computer Science',
        institution: 'New Jersey Institute of Technology',
        year: '2018 - 2022',
        gpa: '3.9'
      },
      {
        degree: 'MS in Data Science',
        institution: 'New Jersey Institute of Technology',
        year: '2022 - 2023',
        gpa: '4.0'
      }
    ]
  };

  return (
    <div className="container">
      <Header name={resumeData.name} jobTitle={resumeData.jobTitle} contact={resumeData.contact} />
      <PersonalProfile profile={resumeData.personalProfile} />
      <WorkExperience experiences={resumeData.workExperience} />
      <Skills skills={resumeData.skills} />
      <Education education={resumeData.education} />
    </div>
  );
}

export default App;
