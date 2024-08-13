import React, { useState } from 'react';
import { DisplayCV } from './components/DisplayCV.jsx';
import { MainInfoForm } from './components/MainInfoForm.jsx';
import { EducationForm } from './components/EducationForm.jsx';
import { OccupationForm } from './components/OccupationForm.jsx';
import './App.css'


const initialState = {
  mainInfo: {
    name: 'Hugo',
    email: 'Olivier',
    address: '67 Rue Belliard, 75018 Paris, France'
  },
  educationInfo: [
    { schoolName: 'PSL Research University', subjectArea: 'Artificial Intelligence and Organizational Sciences', startDate: '01.09.2020', endDate: '01.06.2023' }
  ],
  occupationInfo: [
    { companyName: 'Capgemini', position: 'Software Engineer', startDate: '01.06.2023', endDate: '01.06.2024' }
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
        { schoolName: '', subjectArea: '', startDate: '', endDate: '' }
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
    <main className='content'>
       <button className='modeToggle-btn' onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Switch to Display Mode' : 'Switch to Edit Mode'}
      </button>
      {isEditing ? (
        <div>
          <MainInfoForm mainInfo={state.mainInfo} handleMainInfoChange={handleMainInfoChange} />
          <EducationForm educationInfo={state.educationInfo} handleEducationChange={handleEducationChange} addEducation={addEducation} />
          <OccupationForm occupationInfo={state.occupationInfo} handleOccupationChange={handleOccupationChange} addOccupation={addOccupation} />
        </div>
      ) : (
        <DisplayCV data={state} />
      )}
     
    </main>
  );
}
