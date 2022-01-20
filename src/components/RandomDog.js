import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomDog = (props) => {
  const RANDOM_DOG_URL = 'https://dog.ceo/api/breeds/image/random';

  const [randomDog, setRandomDog] = useState(null);

  useEffect(() => {
    const getRandomDog = async () => {
      try {
        const response = await axios.get(RANDOM_DOG_URL);
        setRandomDog(response.data.message);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomDog();
  }, []);

  let dogBreed;
  if (randomDog) {
    dogBreed = randomDog.split('/')[4];
  }

  return (
    <div>
      <h1>{dogBreed}</h1>
      <img src={randomDog} alt='Random dog image' />
    </div>
  );
};

export default RandomDog;
