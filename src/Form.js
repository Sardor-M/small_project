import React, {Component} from "react";


class Form extends Component { 
    initialState = {
        name: " ",
        currentjob: " ",
        prevjob:" "
    };

    state = this.initialState

handleChange =(event) => {
    const  {name, value} = event.target;

    this.setState ({
        [name]: value,
    });
}
onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}
render (){
    const {name, currentjob, prevjob} = this.state;

    return (
        <form onSubmit={this.onFormSubmit}>
            <label for='name'>Name</label>
            <input 
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}/>
            <label for ="currjob">Current Job</label>
            <input 
                type="text"
                name="currentjob"
                id="currentjob"
                value={currentjob}
                onChange={this.handleChange}/>
            <label for ="prevjob">Previous Job</label>
            <input 
                type="text"
                name="prevjob"
                id="prevjob"
                value={prevjob}
                onChange={this.handleChange}/>   
            <button type="submit"> Submit </button>
                
          
               
        </form>
    );
}

}
export default Form;