import React from 'react';

export const EducationForm = ({ educationInfo, handleEducationChange, addEducation }) => {
  return (
    <div>
      <h2>Educational Info</h2>
      {educationInfo.map((edu, index) => (
        <div key={index} style={{display: 'flex', flexDirection:'column',alignItems:'start',gap:'10px'}}>
          <input name="schoolName" value={edu.schoolName} onChange={(e) => handleEducationChange(index, e)} placeholder="School Name" />
          <input name="titleOfStudy" value={edu.titleOfStudy} onChange={(e) => handleEducationChange(index, e)} placeholder="Title of Study" />
          <input type="date" name="startDate" onChange={(e) => handleEducationChange(index, e)} placeholder="Start Date" />
          <input type="date" name="endDate" onChange={(e) => handleEducationChange(index, e)} placeholder="End Date" />
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
};
