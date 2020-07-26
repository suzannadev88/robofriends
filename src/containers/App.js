import React, { Component } from 'react';
import logo from '../logo.svg';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// function App() {
//   return (
//     <div className="tc">
//       <h1>Robofriends</h1>
//       <CardList robots={robots}/>
//       <SearchBox/>
//     </div>
//   );
// }

//use it to return and render state of robots like this now
class App extends Component {
  //add state
  constructor(){
    super()
    this.state={
      //here add whatever should be in state
      robots: [],
      //robots: robots,
      searchfield: ''
    }
  }

  componentDidMount(){
  //no arrows for default react func
  //changing the state will fire render for updating lifecycle again
  //now take robots from google api, fetch from server
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users=> {this.setState({ robots: users})});
  //this.setState({robots: robots})
  }

  //use this to connect render and state
  onSearchChange = (event) =>{
    //log every event attempt
    this.setState({searchfield: event.target.value})
  }
  render(){
    const { robots, searchfield } = this.state;
    const filteredRobots= robots.filter(robot=>{
      //if includes string part return to array
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    //if the fetch is too long add if check

    // replace this with below if(this.state.robots.length===0){
    //   return <h1>Loading</h1>
    // } else{

      return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          {/*now access as state, as state above is passed as prop so cardList accepts robots as props although is
          named here as state above, now app can change the state of robots */}
          {/* <CardList robots={this.state.robots}/> */}
          {/*attach event handler*/}
          <SearchBox searchChange={this.onSearchChange}/>
           {/*add scroll component and make CL children*/}
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
              </ErrorBoundry>
          </Scroll>
          {/* <CardList robots={robots}/> */}
        </div>
      );
    }
}
export default App;
