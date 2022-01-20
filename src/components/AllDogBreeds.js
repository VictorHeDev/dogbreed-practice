import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllDogBreeds = () => {
  const BASE_URL = `https://dog.ceo/api/breeds/list/all`;
  const [allDogsData, setAllDogsData] = useState(null);

  useEffect(() => {
    const getDogBreeds = async () => {
      const response = await axios
        .get(BASE_URL)
        .then((promise) => {
          return promise.data;
        })
        .catch((e) => {
          console.log('The error is: ', e);
        });
      // call get dog breeds from useEffect
      // call set dog breeds within the async function
      setAllDogsData(response.message);
    };
    getDogBreeds();
    // setDogBreeds(getDogBreeds());
    // const allDogs = Object.values(dogBreeds);
  }, [BASE_URL]);

  // .data
  // .message
  if (!allDogsData) return null;
  console.log(allDogsData);

  return (
    <>
      {/* <h3>Here are the breeds</h3> */}
      <div className='all-dog-breeds-container'>
        {Object.entries(allDogsData).map((breed) => {
          const dogBreed = breed[0];
          const subBreedArr = breed[1].map((subbreed) => (
            <div className='subbreed'>{subbreed}</div>
          ));

          return (
            <div className='dog-breed-container'>
              <Link to={`/${dogBreed}`}>{dogBreed}</Link>

              {subBreedArr}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllDogBreeds;

// index of all breeds
// display all subbreeds
// click on a link of the breed -> display image
