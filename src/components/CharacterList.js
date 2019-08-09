import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-flow: wrap;
justify-content: space-between;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/?page=1`)
      .then(data => {
        console.log(data.data.results)
        setCharacter([...data.data.results]);
      })
      .catch(error => {
        console.log('Error occurred -->', error);
      })

  }, [])

  return (
    <Wrapper>
      {character.map((char, i) => <CharacterCard props={char} key={i} />)}
    </Wrapper>
  );

}