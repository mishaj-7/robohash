import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      robots: [],
      searchField: '',
    }; // state create

  }

  componentDidMount() {
    // Fetch users data from the api

   let a =  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        this.setState({ robots: data });
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }

  handleSearchChange = (event) => {
    // console.log(event);
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;

    // Filter robots based on the search input
    const filteredRobots = robots.filter(robot => {
      let searchfielddata = robot.name.toLowerCase().includes(searchField.toLowerCase());
      console.log(searchfielddata);
      return searchfielddata;
    });

    return (
      <>
        <div className="container mt-4">

          <h1 className="text-center mb-4">Robot Application</h1>

          {/* Search input */}
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search Robots"
            onChange={ event => {
              this.handleSearchChange(event);
            }} // this is call back that onChange call it self when change make inside the inpu field then event contain value of inside the box what we type then call search function 
          />

          {/* Display robot cards */}
          <div className="row">
            { filteredRobots.map(robot => {
              return (
                <div key={robot.id} className="col mb-4">
                  <div className="card">
                    <img
                      src={`https://robohash.org/${robot.id}?set=set3`}
                      alt={robot.name}
                      className="card-img-top"
                    />

                    <div className="card-body">
                      <h5 className="card-title">{robot.name}</h5>
                      <p className="card-text">{robot.email}</p> 
                    </div>

                  </div>

                </div>
              );
        
        })}
        
          </div>
        
        </div>

      </>
    );
  }
}

export default App;
