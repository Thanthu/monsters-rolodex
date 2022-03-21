import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => { return { monsters: users } },
        () => console.log(this.state)
      ));
  }

  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchString = event.target.value.toLowerCase();
          const filteredMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));
          this.setState(
            () => { return { monsters: filteredMonsters } },
            () => console.log(this.state)
          );
        }} />
        {this.state.monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    );
  }

}

export default App;
