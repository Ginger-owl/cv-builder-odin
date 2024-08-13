import React from 'react';

export const MainInfoForm = ({ mainInfo, handleMainInfoChange }) => {
  return (
    <section>
      <h2>Main Info</h2>
      <div style={{display: 'flex', flexDirection:'column',alignItems:'start',gap:'10px'}}>
        <input name="name" value={mainInfo.name} onChange={handleMainInfoChange} placeholder="Name" />
        <input name="email" value={mainInfo.email} onChange={handleMainInfoChange} placeholder="Email" />
        <input name="address" value={mainInfo.address} onChange={handleMainInfoChange} placeholder="Address" />
      </div>
    </section>
  );
};
