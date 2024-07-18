import React, { useState } from 'react';
import { DisplayCV } from './components/DisplayCV.jsx';
import { MainInfoForm } from './components/MainInfoForm.jsx';
import { EducationForm } from './components/EducationForm.jsx';
import { OccupationForm } from './components/OccupationForm.jsx';

const initialState = {
  mainInfo: {
    name: '',
    email: '',
    address: ''
  },
  educationInfo: [
    { schoolName: '', titleOfStudy: '', startDate: '', endDate: '' }
  ],
  occupationInfo: [
    { companyName: '', position: '', startDate: '', endDate: '' }
  ]
};

export const App = () => {
  const [state, setState] = useState(initialState);
  const [isEditing, setIsEditing] = useState(true);

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };  

  const handleMainInfoChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      mainInfo: {
        ...prevState.mainInfo,
        [name]: value
      }
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducationInfo = [...state.educationInfo];
    newEducationInfo[index] = {
      ...newEducationInfo[index],
      [name]: name === 'startDate' || name === 'endDate' ? formatDate(value) : value
    };
    setState(prevState => ({
      ...prevState,
      educationInfo: newEducationInfo
    }));
  };

  const addEducation = () => {
    setState(prevState => ({
      ...prevState,
      educationInfo: [
        ...prevState.educationInfo,
        { schoolName: '', titleOfStudy: '', startDate: '', endDate: '' }
      ]
    }));
  };

  const handleOccupationChange = (index, e) => {
    const { name, value } = e.target;
    const newOccupationInfo = [...state.occupationInfo];
    newOccupationInfo[index] = {
      ...newOccupationInfo[index],
      [name]: name === 'startDate' || name === 'endDate' ? formatDate(value) : value
    };
    setState(prevState => ({
      ...prevState,
      occupationInfo: newOccupationInfo
    }));
  };

  const addOccupation = () => {
    setState(prevState => ({
      ...prevState,
      occupationInfo: [
        ...prevState.occupationInfo,
        { companyName: '', position: '', startDate: '', endDate: '' }
      ]
    }));
  };

  return (
    <>
      {isEditing ? (
        <div>
          <MainInfoForm mainInfo={state.mainInfo} handleMainInfoChange={handleMainInfoChange} />
          <EducationForm educationInfo={state.educationInfo} handleEducationChange={handleEducationChange} addEducation={addEducation} />
          <OccupationForm occupationInfo={state.occupationInfo} handleOccupationChange={handleOccupationChange} addOccupation={addOccupation} />
        </div>
      ) : (
        <DisplayCV data={state} />
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Switch to Display Mode' : 'Switch to Edit Mode'}
      </button>
    </>
  );
}
