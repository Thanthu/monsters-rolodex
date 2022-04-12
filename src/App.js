import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

function App() {

  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchString(searchString);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder="search monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;