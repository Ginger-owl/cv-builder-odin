import React from 'react';

export const DisplayCV = ({ data }) => {
  return (
    <div>
      <h1>{data.mainInfo.name}</h1>
      <p>Email: {data.mainInfo.email}</p>
      <p>Address: {data.mainInfo.address}</p>

      <h2>Education</h2>
      {data.educationInfo.map((edu, index) => (
        <div key={index}>
          <p>School: {edu.schoolName}</p>
          <p>Title: {edu.titleOfStudy}</p>
          <p>Dates: {edu.studyDates}</p>
        </div>
      ))}

      <h2>Occupation</h2>
      {data.occupationInfo.map((occ, index) => (
        <div key={index}>
          <p>Company: {occ.companyName}</p>
          <p>Position: {occ.position}</p>
          <p>Dates: {occ.workDates}</p>
        </div>
      ))}
    </div>
  );
};
