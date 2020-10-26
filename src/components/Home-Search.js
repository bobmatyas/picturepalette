import React from 'react';
import { useColorContext } from '../ColorProvider';
import styled from 'styled-components';
import './Home-Search.css';

const Search = styled.div`
    background-color: #eee;
    padding: 3% 5%;    
    width: 100%;
`;

const FilterHolder = styled.fieldset`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid rgba(0,0,0, 0.1);
  padding: 25px 50px;
  border-radius: 5px;
`;

function HomeSearch() {

    const { color } = useColorContext();

    return (
        <Search style={{borderTop: '2px solid' + color.hex, borderBottom: '2px solid' + color.hex}}>
            <FilterHolder>
        <div className="home__search__bar__input__holder__box">
        <label htmlFor="searchText" className="home__search__bar__input__holder__label__search">Keyword Search:</label>
        <input type="text" id="searchText" maxlength="100" placeholder="Enter Search Term" />
        </div>

          <div className="home__search__bar__input__holder__box">
      
            <label htmlFor="photoCategory" className="home__search__bar__input__holder__label__search">Category:</label>
            <select id="photoCategory" className="home__search__bar__input__holder__select">
              <option value="" disabled="" hidden="">Please Choose... </option>
              <option value="" selected="selected"></option>
              <option>Test</option>
            </select>
          </div>
        
          <div className="home__search__bar__input__holder__box">

          <label htmlFor="photoOrientation" className="home__search__bar__input__holder__label__search">Orientation:</label>
          <select id="photoOrientation" className="home__search__bar__input__holder__select"> 
            <option> All</option>
          </select>

          </div>

          <div className="home__search__input__holder__box">
            <button className="button">
              Search
            </button>            
          </div>          
        </FilterHolder>
    
        </Search>
    )
}

export default HomeSearch;