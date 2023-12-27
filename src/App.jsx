import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    //console.log(props);

    this.state = {
      robots: [],
      searchField: '',
    }; // state create

  }

  componentDidMount() {
    // Fetch users data from the api

      fetch('https://jsonplaceholder.typicode.com/users')
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
      
      // console.log(robot)
       return  robot.name.toLowerCase().includes(searchField.toLowerCase());  {/* both side name convert tolowercase then check it inside the array if yes return true or false by includes() if true it inside the new array created filter then render using that array using map  */}
      });
      

    return (
      <>
        <div className="container mt-4">

        <h1 className="text-center mb-4 heading">Robot Application</h1>
        
        {/* <h2> it will in the dom at the first render even befor fetch api compleat inside lifecyclemthode</h2> */}
         
          {/* Search input */}

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search Robots"
            onChange={ event => {
              this.handleSearchChange(event);
            }} // this is call back that onChange call it self when change make inside the input field then event contain value of inside the box what we type then call search function 
          />
          
          {/* Display robot cards */} 
          <div className="row">
            { filteredRobots.map(robot => {

              
             // console.log(filteredRobots);
              return (
                <div key={robot.id} className="col mb-4"> {/*in this line robot object have values insdie obj we set key value for all cards diffrent key which help react */}
                  <div className="card">
                    
                    <div> {/* this is robot image div */}
                    <img
                      src={`https://robohash.org/${robot.id+100}?set=set3`}
                      alt={robot.name}
                      className="card-img-top"
                    />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">{robot.name}</h5>
                      <p className="card-text">{robot.email}</p> 
                      <p>hai</p>
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
