import React from "react";
import uniqid from "uniqid";

const Experience = (props) => {
      return (
            <div>
                <h2> Experience </h2>
                <form>
                    <div>
                        <label htmlFor="name"> Company Name here </label>
                        <input id="name" type="text" onChange={props.enteredCompany} value={props.showField.name} />
                    </div>
                    <div>
                        <label htmlFor="title"> Position Held </label>
                        <input id="title" type="text" onChange={props.enteredCompany} value={props.showField.title} />
                    </div>
                    <div>
                        <label htmlFor="tasks"> Main Tasks </label>
                        <textarea id="tasks" onChange={props.enteredCompany} value={props.showField.tasks}> </textarea>
                    </div>
                    <div>
                        <label htmlFor="from"> Worked From </label>
                        <input id="from" type="date" onChange={props.enteredCompany} value={props.showField.from} />
                    </div>
                    <div>
                        <label htmlFor="to"> Worked Until </label>
                        <input id="to" type="date" onChange={props.enteredCompany} value={props.showField.to} />
                    </div>
                    <div>
                        <button onClick={props.submitCompany}> Submit </button>
                    </div>
                </form>

                <div> <strong> Your experience here </strong>
                {props.company.map((firm)=> 
                <div key={uniqid()}> 
                <p> Firm : {firm.name} </p> 
                <p> Position held: {firm.title} </p> 
                <p> Tasks undergone: {firm.tasks} </p>
                <p> Worked from:{firm.from} Until:{firm.to} </p> 
                <button type="button" onClick={() => props.editCompany(firm)}> Edit </button>
                </div>)}           
                
                </div>

            </div>
        );
}

export default Experience;