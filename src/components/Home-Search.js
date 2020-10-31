import React, { useState, useEffect }  from 'react';
import { useColorContext } from '../ColorProvider';
import styled from 'styled-components';
import './Home-Search.css';
import Photos from './Photos';

const searchCategories = ['animals', 
    'backgrounds', 
    'buildings', 
    'business', 
    'computer', 
    'education', 
    'fashion', 
    'feelings', 
    'food', 
    'health', 
    'industry', 
    'music', 
    'nature', 
    'people', 
    'places', 
    'religion', 
    'science', 
    'sports', 
    'transportation', 
    'travel']

const Search = styled.div`
    background-color: #eee;
    padding: 3% 5%;    
    width: 100%;
`;

const FilterHolder = styled.fieldset`
  align-items: center;
  border: 2px solid rgba(0,0,0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 25px 50px;
`;



function HomeSearch() {

    const { color } = useColorContext();
    const [search, setSearch] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
  
    const API_KEY = process.env.REACT_APP_PIXABAY;

    function handleSubmit(event) {
      event.preventDefault()
      console.log(event.target.elements.searchText.value)
      setSearch(event.target.elements.searchText.value)
    }

    useEffect(() => {
      setLoading(true);
      fetch(`https://pixabay.com/api/?key=${API_KEY}&image_type=photo&colors=${color.color}&q=${search}`)
        .then(data => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .then(console.log(data))
        .catch(setError);
    }, [search]);
  
    if (loading) return <h2>loading...</h2>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;

    
    return (
        <>
        { console.log(data) }

        <Search style={{borderTop: '2px solid' + color.hex, borderBottom: '2px solid' + color.hex}}>

            <FilterHolder>
        <form onSubmit={handleSubmit}>
        <div className="home__search__bar__input__holder__box">
        <label htmlFor="searchText" className="home__search__bar__input__holder__label__search">Keyword Search:</label>
        <input type="text" id="searchText" maxLength="100" placeholder="Enter Search Term" />
        </div>

          <div className="home__search__bar__input__holder__box">
      
            <label htmlFor="photoCategory" className="home__search__bar__input__holder__label__search">Category:</label>
            <select id="photoCategory" className="home__search__bar__input__holder__select">
            { 
              searchCategories.map((category, i) =>
                <option value={category} key={i}>{ category.charAt(0).toUpperCase()+ category.substr(1).toLowerCase() }</option>
              ) 
            }
            </select>
          </div>
        
          <div className="home__search__bar__input__holder__box">

          <label htmlFor="photoOrientation" className="home__search__bar__input__holder__label__search">Orientation:</label>
          <select id="photoOrientation" className="home__search__bar__input__holder__select"> 
            <option defaultValue="All"> All</option>
            <option value="Horizontal"> Horizontal</option>
            <option value="Vertical"> Vertical</option>
          </select>

          </div>

          <div className="home__search__input__holder__box">
            <button className="button" type="submit"> 
              Search
            </button>            
          </div>
          </form>          
        </FilterHolder>
    
        </Search>
        <Photos
          results={data.hits}
        />
        </>
    )
}

export default HomeSearch;