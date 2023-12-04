import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    // Fetch robot data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robots: data }))
      .catch(error => console.error('Error fetching data:', error));
  }

  

  render() {
    const { robots, searchField } = this.state;

    // Filter robots based on the search input
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Robot Gallery</h1>
        {/* Search input */}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search Robots"
          onChange={this.handleSearchChange}
        />
        {/* Display robot cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {filteredRobots.map(robot => (
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
          ))}
        </div>
      </div>
    );
  }
}

export default App;
