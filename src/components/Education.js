import React from "react";
import uniqid from "uniqid";

const Education = (props) => {
        return (
            <div>
                <h2> Education </h2>
                <form>
                    <div>
                        <label htmlFor="name"> School Name </label>
                        <input id="name" type="text" onChange={props.enteredSchool} value={props.showField.name} />
                    </div>
                    <div>
                        <label htmlFor="title"> Title of Study </label>
                        <input id="title" type="text" onChange={props.enteredSchool} value={props.showField.title} />
                    </div>
                    <div>
                        <label htmlFor="date"> Date of Study </label>
                        <input id="date" type="date" onChange={props.enteredSchool} value={props.showField.date} />
                    </div>
                    <div>
                        <button onClick={props.submitSchool}> Submit </button>
                    </div>
                </form>

                <div> <strong> Tell us about your Schooling! </strong>
                {props.school.map((institute)=> 
                <div key={uniqid()}> 
                <p> School Name: {institute.name} </p> 
                <p> Study Title: {institute.title} </p> 
                <p> Study Date: {institute.date} </p> 
                <button type="button" onClick={() => props.editSchool(institute)}> Edit </button>
                </div>)}           
                
                </div>

            </div>
        );
}

export default Education;