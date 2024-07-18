import React from 'react';

export const OccupationForm = ({ occupationInfo, handleOccupationChange, addOccupation }) => {
  return (
    <div>
      <h2>Occupation Info</h2>
      {occupationInfo.map((occ, index) => (
        <div key={index} style={{display: 'flex', flexDirection:'column',alignItems:'start',gap:'10px'}}>
          <input name="companyName" value={occ.companyName} onChange={(e) => handleOccupationChange(index, e)} placeholder="Company Name" />
          <input name="position" value={occ.position} onChange={(e) => handleOccupationChange(index, e)} placeholder="Position" />
          <input type="date" name="startDate" onChange={(e) => handleOccupationChange(index, e)} placeholder="Start Date" />
          <input type="date" name="endDate" onChange={(e) => handleOccupationChange(index, e)} placeholder="End Date" />
        </div>
      ))}
      <button onClick={addOccupation}>Add Occupational</button>
    </div>
  );
};
