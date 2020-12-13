import React from 'react';
import Heading from './Heading';
import Welcome from './Home-Welcome';
import ColorSelection from './Color-Selection';
import HomeSearch from './Home-Search';
import { useColorContext } from '../ColorProvider';

function Home() {

    const { color } = useColorContext(); 

    return (
        <>
        
        <Heading />
        { color.length < 1 ? <Welcome /> : '' }
        { color.length < 1 ?  <ColorSelection /> : '' }
        { color.length < 1 ? ' ' : <HomeSearch /> }

        </>
    )
}

export default Home;