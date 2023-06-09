import './SearchBar.css';
import { useState } from "react";
function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        //console.log(event.target.value);
        setTerm(event.target.value);
    };

  return (
      <div className="search-bar">
          <form onSubmit={handleSubmit}>
              <input value={term} onChange={handleChange}/>
          </form>
      </div>
  );
}

export default SearchBar;