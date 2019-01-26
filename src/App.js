import React, { Component } from "react";
import Feed from "./components/Feed";
import "./App.css";

const renderData = [
  {
      user: {
          name:'Mr Jhone',
          email:'mrjhon@cool.com',
          thumbnail:'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      }
  },
  {
      user: {
          name:'Mr Cool',
          email:'mrjhon@cool.com',
          thumbnail:'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      }
  },
  {
      user: {
          name:'Mr Michal',
          email:'mrjhon@cool.com',
          thumbnail:'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      }
  },
  {
      user: {
          name:'Mr Obroy',
          email:'mrjhon@cool.com',
          thumbnail:'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      }
  },
  {
      user: {
          name:'Mr Hello',
          email:'mrjhon@cool.com',
          thumbnail:'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      }
  },
  {
      user: {
          name:'Mr Stive',
          email:'mrjhon@cool.com',
          thumbnail:'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      }
  }
]

class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
    // fetch("https://api.randomuser.me/?results=50")
    //   .then(response => response.json())
    //   .then(parsedResponse =>
    //     parsedResponse.results.map(user => ({
    //       name: `${user.name.first} ${user.name.last}`,
    //       email: user.email,
    //       thumbnail: user.picture.thumbnail
    //     }))
    //   )
    //   .then(contacts => this.setState({ contacts }));
    let self = this;
    setTimeout(function(){ 
      self.setState({
        contacts:renderData
      })

     }, 3000);
    
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                HOC Demo app
              </a>
            </li>
          </ul>
        </nav>

        <Feed contacts={this.state.contacts} />
      </div>
    );
  }
}



export default App;
