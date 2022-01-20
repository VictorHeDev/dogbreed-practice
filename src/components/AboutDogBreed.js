import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AboutDogBreed = (props) => {
  const { breed } = useParams();
  const RANDOM_DOG_URL = `https://dog.ceo/api/breed/${breed}/images/random`;
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const getRandomImage = async () => {
      const response = await axios
        .get(RANDOM_DOG_URL)
        .then((promise) => {
          return promise.data;
        })
        .catch((e) => {
          console.log(e);
        });
      setRandomImage(response.message);
    };
    getRandomImage();
  }, [RANDOM_DOG_URL]);

  if (!randomImage) return null;

  return (
    <div>
      Hi I'm vic
      <p>{RANDOM_DOG_URL}</p>
      <img src={randomImage} alt='Random image of Dog' />
    </div>
  );
};

export default AboutDogBreed;
