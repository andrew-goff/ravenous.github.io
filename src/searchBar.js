//React component that implements the Search Bar form functionality
import React, { useState }  from 'react';
import { business } from './business';
import './businessList.css';
import SearchForm from './SearchForm';
import { render } from 'react-dom';
import getBusiness, { Btn } from './utils/api.js';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';

function SearchBar(){
    const [businessValue, setBusinesses] = useState('');
    const [term, setTerm] = useState('Pizzeria');
    const [location, setLocation ] = useState('New York');
    const [sortState, setSortState] = useState("best_match");

    

    //const data = [term, businessValue, location, sortState];

    let blue = '#2624cb';
    const [sortColor, setsortColor] = useState(blue);


    const handleSubmit = (event) => {
      if(term === '' ){
        alert("Select a business to search for a review!");
      }

      else {
        alert(JSON.stringify("Searching with " + term + " , " + location + " , " + setSortState.option.value));
        event.preventDefault();
      }
    }

    function handleTextColorChange(){
      let gold = "burlywood";
      setsortColor(gold);
    }

    const handleTerm = (target) => {
      setTerm(target.value);
      //setState(JSON.stringify(data));
    }

    const handleLocation = (target) => {
      setLocation(target.value);
    }

    return(
        <div>
          <h1 className="Search-h1">Search for Businesses</h1>
          <select defaultValue={'BEST MATCH'} style= {{color: sortColor}} onClick={handleTextColorChange} onChange={(e => setSortState(e.target.value))}>
            <option value="Best Match">Best Match</option>
            <option value="Highest Rated">Highest Rated</option>
            <option value="Most Reviewed">Most Reviewed</option>
          </select>
          <form className="BusinessSearchForm" onSubmit={handleSubmit}>
            <label className="Searchbar-label">Set Business:</label>
            <input type="text" name="term" value={term} onChange={handleTerm} placeholder="Search the Businesses"/>
            <label className="Searchbar-label">Set location:</label>
            <input type="text" name="location" value={location} onChange={handleLocation} placeholder="Which location?"/>
          </form>  
          <div className="SearchSubmit">
            <button id="playBtn" onClick={()=> { getBusiness(term, location)}}>Submit</button>
          </div>
        </div>     
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<SearchBar />);
export default SearchBar;