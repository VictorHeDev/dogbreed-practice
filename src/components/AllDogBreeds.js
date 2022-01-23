import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllDogBreeds = () => {
  const BASE_URL = `https://dog.ceo/api/breeds/list/all`;
  const [allDogsData, setAllDogsData] = useState(null);

  // useEffect(() => {
  //   const getDogBreeds = async () => {
  //     const response = await axios
  //       .get(BASE_URL)
  //       .then((promise) => {
  //         return promise.data;
  //       })
  //       .catch((e) => {
  //         console.log('The error is: ', e);
  //       });
  //     // call get dog breeds from useEffect
  //     // call set dog breeds within the async function
  //     setAllDogsData(response.message);
  //   };
  //   getDogBreeds();
  //   // setDogBreeds(getDogBreeds());
  //   // const allDogs = Object.values(dogBreeds);
  // }, [BASE_URL]);

  useEffect(() => {
    const getDogBreeds = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setAllDogsData(response.data.message);
      } catch (e) {
        console.log('The error is: ', e);
      }
    };
    getDogBreeds();
  }, [BASE_URL]);

  const renderAllDogs = () => {
    return (
      allDogsData &&
      Object.entries(allDogsData).map((breed, j) => {
        const dogBreed = breed[0];
        const subBreedArr = breed[1].map((subbreed, i) => (
          <div className='subbreed' key={i}>
            {subbreed}
          </div>
        ));
        //possible alternative
        //use object.keys to get list of breeds
        //iterate through the array, find the key in the object, if it has subreeds, make a dropdown

        //as a seperate function
        //if a dropdown button is clicked, find the key in the object, iterate through the array of subbreeds, make a list of links to the subreed pages


        return (
          <div key={j} className='dog-breed-container'>
            <Link to={`/${dogBreed}`}>{dogBreed}</Link>

            {subBreedArr}
          </div>
        );
      })
    );
  };

  return (
    <>
      <div className='all-dog-breeds-container'>{renderAllDogs()}</div>
    </>
  );
};

export default AllDogBreeds;

// index of all breeds
// display all subbreeds
// click on a link of the breed -> display image
