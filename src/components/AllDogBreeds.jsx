import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = `https://dog.ceo/api/breeds/list/all`;

const AllDogBreeds = () => {
  const [allDogs, setAllDogs] = useState(null);

  useEffect(() => {
    const getDogBreeds = async () => {
      const response = await axios.get(BASE_URL);
      const allDogsData = response.data.message;
      // call get dog breeds from useEffect
      // call set dog breeds within the async function
      // const parsedDogData = Object.keys(allDogsResponse.data.message);
      setAllDogs(allDogsData);

      // set dog breeds
      // return parsedDogData;
    };
    getDogBreeds();
    console.log(allDogs);
    // setDogBreeds(getDogBreeds());
    // const allDogs = Object.values(dogBreeds);
    // console.log(allDogs);
  }, []);

  // console.log(dogBreeds);
  // .data
  // .message
  // Object.values()

  return <div></div>;
};

export default AllDogBreeds;

// index of all breeds
// display all subbreeds
// click on a link of the breed -> display image
