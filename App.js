import React, { Component } from 'react';
import './App.css';
import profilepic from "./profilepic.jpg";

class Profile extends Component {
  render() {
    return (
      <div>
        
        <h1>{this.props.fullName}</h1>
       <h2>{this.props.bio}</h2>
        <img src={this.props.imgSrc} alt='profilepic' />
        <h2>{this.props.profession}</h2>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "omayma homrani",
        bio: "student",
        imgSrc: profilepic,
        profession: "student",
      },
      shows: false
    };
    console.log("constructor(props)");
  }

  render() {
    console.log(this.state.count);
     console.log("render()");
    return (
      <div className='App'>
        <button onClick={() => this.setState({ shows: !this.state.shows })} >show</button>
        {this.state.shows && <Profile
          fullName={this.state.person.fullName}
          bio={this.state.person.bio}
          imgSrc={this.state.person.imgSrc}
          profession={this.state.person.profession} />}
      </div>
    );
  }
}

export default App;