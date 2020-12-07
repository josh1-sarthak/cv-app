import React from "react";
import uniqid from "uniqid";

const GeneralInfo = (props) => {
        return (
            <div>
                <h2> General Info </h2>
                <form>
                    <div>
                        <label htmlFor="name"> Insert name here </label>
                        <input id="name" type="text" onChange={props.enteredInfo} value={props.showField.name} />
                    </div>
                    <div>
                        <label htmlFor="mail"> Your email id </label>
                        <input id="mail" type="email" onChange={props.enteredInfo} value={props.showField.mail} />
                    </div>
                    <div>
                        <label htmlFor="phone"> Phone number please... </label>
                        <input id="phone" type="text" onChange={props.enteredInfo} value={props.showField.phone} />
                    </div>
                    <div>
                        <button onClick={props.submitInfo}> Submit </button>
                    </div>
                </form>

                <div> <strong> What's added </strong> 
                {props.info.map((person)=> 
                <div key={uniqid()}> 
                <p> Name: {person.name} </p> 
                <p> Email: {person.mail} </p> 
                <p> Phone: {person.phone} </p> 
                <button type="button" onClick={() => props.editInfo(person)}> Edit </button>
                </div>)}           
                
                </div>

            </div>
        );
}

export default GeneralInfo;