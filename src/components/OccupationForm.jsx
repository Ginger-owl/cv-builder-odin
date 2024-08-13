import React from 'react';

export const OccupationForm = ({ occupationInfo, handleOccupationChange, addOccupation }) => {
  return (
    <section>
      <h2>Occupation Info</h2>
      {occupationInfo.map((occ, index) => (
        <div key={index} style={{display: 'flex', flexDirection:'column',alignItems:'start',gap:'10px'}}>
          <input name="companyName" value={occ.companyName} onChange={(e) => handleOccupationChange(index, e)} placeholder="Precise computations" />
          <input name="position" value={occ.position} onChange={(e) => handleOccupationChange(index, e)} placeholder="Engineer" />
          <input type="date" name="startDate" onChange={(e) => handleOccupationChange(index, e)} placeholder="24.10.2020" />
          <input type="date" name="endDate" onChange={(e) => handleOccupationChange(index, e)} placeholder="21.03.2022" />
        </div>
      ))}
      <button onClick={addOccupation}>Add Occupation</button>
    </section>
  );
};
