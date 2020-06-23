import React, {useState} from 'react'


const Form = (props) =>{
    
    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="entry">Enter zipcode</label>
            <input type='text' value={props.zipcode} onChange={props.onChange} id="zip"/>
            <input type="submit"/>
        </form>
    );
};

export default Form