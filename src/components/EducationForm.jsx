import React from 'react';

export const EducationForm = ({ educationInfo, handleEducationChange, addEducation }) => {
  return (
    <section>
      <h2>Educational Info</h2>
      {educationInfo.map((edu, index) => (
        <div key={index} style={{display: 'flex', flexDirection:'column',alignItems:'start',gap:'10px'}}>
          <input name="schoolName" value={edu.schoolName} onChange={(e) => handleEducationChange(index, e)} placeholder="School Name" />
          <input name="titleOfStudy" value={edu.titleOfStudy} onChange={(e) => handleEducationChange(index, e)} placeholder="Title of Study" />
          <input type="date" name="startDate" onChange={(e) => handleEducationChange(index, e)} placeholder="03.04.2019" />
          <input type="date" name="endDate" onChange={(e) => handleEducationChange(index, e)} placeholder="21.10.2020" />
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </section>
  );
};
