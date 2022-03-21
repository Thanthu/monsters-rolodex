import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => { return { monsters: users } }
      ));
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(
      () => { return { searchString } }
    );
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(this.state.searchString));

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={this.onSearchChange} />
        {filteredMonsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    );
  }

}

export default App;
