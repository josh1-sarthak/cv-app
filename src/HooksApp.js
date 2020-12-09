import React, { useState } from "react";
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import styled, { css } from 'styled-components';


const DivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: none;
  height: 500px;
  grid-gap: 2px;
  font-family: monospace;
`;

const sharedStyle  = css`
  border: 2px solid black;
  padding: 5px;
`;

const DivInfo = styled.div`
  ${sharedStyle}
`;
const DivEducation = styled.div`
  ${sharedStyle}
`;
const DivExperience = styled.div`
  ${sharedStyle}
`;

const HooksApp = () => {
    const [info, setInfo] = useState([]);
    const [currinfo, setCurrinfo] = useState({name: '', mail: '', phone: ''});
    const [school, setSchool] = useState([]);
    const [currSchool, setCurrSchool] = useState({name: '', title: '', date: ''});
    const [company, setCompany] = useState([]);
    const [currCompany, setCurrCompany] = useState({name: '', title: '', tasks: '', from: '', to: ''});

  const handleInfo = (e) => {
    const idx = e.target.id;
    const val = e.target.value;
    setCurrinfo(currinfo => ({...currinfo, [idx]:val})); // takes currinfo object and change its properties by id
  }

  const submitInfo = (e) => {
    e.preventDefault();
    setInfo(info => [...info, currinfo]); //adds currinfo object to info array
    setCurrinfo({name: '', mail: '', phone: ''});
  }

  const editInfo = (person) => {
    setInfo(people => (people.filter(guy => guy.name !== person.name))); //how does setInfo get to know who people are? setState preserves state between renders, also the ordering of hook calls is maintained
    setCurrinfo({name: person.name, mail: person.mail, phone: person.phone});
  }

  const handleSchool = (e) => {
    const idx = e.target.id;
    const val = e.target.value;
    setCurrSchool(currSchool => ({...currSchool, [idx]:val}));
  }

  const submitSchool = (e) => {
    e.preventDefault();
    setSchool(school => [...school, currSchool]);
    setCurrSchool({name: '', title: '', date: ''});
  }

  const editSchool = (institute) => {
    setSchool(schools => (schools.filter(school => school.name !== institute.name)));
    setCurrSchool({name: institute.name, title: institute.title, date: institute.date});
  }

  const handleCompany = (e) => {
    const idx = e.target.id;
    const val = e.target.value;
    setCurrCompany(currCompany => ({...currCompany, [idx]:val}));
  }

  const submitCompany = (e) => {
    e.preventDefault();
    setCompany(company => [...company, currCompany]);
    setCurrCompany({name: '', title: '', tasks: '', from: '', to: ''});
  }

  const editCompany = (firm) => {
    setCompany(companies => (companies.filter(company => company.name !== firm.name)));
    setCurrCompany({name: firm.name, title: firm.title, tasks: firm.tasks, from: firm.from, to: firm.to});
  }

    return(
      <DivContainer>
        <DivInfo>
          <GeneralInfo info={info} enteredInfo={handleInfo} showField={currinfo} submitInfo={submitInfo} editInfo={editInfo} />
        </DivInfo>
        <DivEducation>
          <Education school={school} enteredSchool={handleSchool} showField={currSchool} submitSchool={submitSchool} editSchool={editSchool}/>
        </DivEducation>
        <DivExperience>
          <Experience company={company} enteredCompany={handleCompany} showField={currCompany} submitCompany={submitCompany} editCompany={editCompany}/>
        </DivExperience>
      </DivContainer>
    );
}

export default HooksApp;
