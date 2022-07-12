import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  }
  handleSubmit = character => {
    this.setState({characters:[...this.state.characters, character]});
  }
  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1 className="h1-style"> Simple project </h1>
        <p className="p-style">Add some  character with a name and a job to the table.</p>
        <Table
              characterData={characters}
              removeCharacter={this.removeCharacter}/>
        <h3> Add New </h3>
        <Form handleSubmit={this.handleSubmit}/>      
      </div>
    );
  }
    //<Form handleSubmit={this.handleSubmit}/>
  };
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))

export default App;