import React from "react";
import GeneralInfo from './components/GeneralInfo';
import Experience from './components/Experience';
import Education from './components/Education';
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

class App extends React.Component {
  constructor() {
    super();

     this.state =  {
        info: [],
        currinfo: {
            name: '', 
            mail: '', 
            phone:'',
        },
        school: [],
        currSchool: {
            name: '', 
            title: '', 
            date:'',
        },
        company: [],
        currCompany: {
            name: '', 
            title: '',
            tasks: '',
            from: '',
            to: '', 
        },
      }
  }

  handleInfo = (e) => {
        const updatefield = this.state.currinfo;
        updatefield.[e.target.id] = e.target.value;
        this.setState({
            currinfo: updatefield,
        })
    }

  submitInfo = (e) => {
      e.preventDefault();
      const info = [...this.state.info, this.state.currinfo] //info is array hence iterable hence spread operator, currinfo is object hence not iterable
      this.setState({
          info: info,
          currinfo: {
              name: '',
              mail: '',
              phone: '',
          }
      })
  }

  editInfo = (person) => {
      const people = this.state.info
    
          this.setState({
              info: people.filter(guy => guy.name !== person.name),
              currinfo : {
                  name: person.name,
                  mail: person.mail,
                  phone: person.phone
              }
          })
      
  }

  handleSchool = (e) => {
      const updatefield = this.state.currSchool;
      updatefield.[e.target.id] = e.target.value;
      this.setState({
          currSchool: updatefield,
      })
  }

  submitSchool = (e) => {
      e.preventDefault();
      const school = [...this.state.school, this.state.currSchool] //info is array hence iterable hence spread operator, currinfo is object hence not iterable
      this.setState({
          school: school,
          currSchool: {
              name: '',
              title: '',
              date: '',
          }
      })
  }

  editSchool = (institute) => {
      const schools = this.state.school
    
          this.setState({
              school: schools.filter(school => school.name !== institute.name),
              currSchool : {
                  name: institute.name,
                  title: institute.title,
                  date: institute.date,
              }
          })
  }

  
  handleCompany = (e) => {
      const updatefield = this.state.currCompany;
      updatefield.[e.target.id] = e.target.value;
      this.setState({
          currCompany: updatefield,
      })
  }

  submitCompany = (e) => {
      e.preventDefault();
      const company = [...this.state.company, this.state.currCompany] 
      this.setState({
          company: company,
          currCompany: {
              name: '',
              title: '',
              tasks: '',
              from: '',
              to: '',
          }
      })
  }

  editCompany = (firm) => {
      const companies = this.state.company
    
          this.setState({
              company: companies.filter(company => company.name !== firm.name),
              currCompany : {
                  name: firm.name,
                  title: firm.title,
                  tasks: firm.tasks,
                  from: firm.from,
                  to: firm.to,
              }
          })
      
  }

  render() {
    return(
      <DivContainer>
        <DivInfo>
          <GeneralInfo info={this.state.info} enteredInfo={this.handleInfo} showField={this.state.currinfo} submitInfo={this.submitInfo} editInfo={this.editInfo} />
        </DivInfo>
        <DivEducation>
          <Education school={this.state.school} enteredSchool={this.handleSchool} showField={this.state.currSchool} submitSchool={this.submitSchool} editSchool={this.editSchool}/>
        </DivEducation>
        <DivExperience>
          <Experience company={this.state.company} enteredCompany={this.handleCompany} showField={this.state.currCompany} submitCompany={this.submitCompany} editCompany={this.editCompany}/>
        </DivExperience>
      </DivContainer>
    );
  }
}

export default App;
