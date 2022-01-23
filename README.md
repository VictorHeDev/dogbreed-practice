# Dog Breeds
The goal of this small project is to utilize the [Dog Api](https://dog.ceo/dog-api/documentation/) and become more familiar with React Hooks

Assignment:
1. Use the Dog API to fetch a list of all dogs
   1. Fetch all of the dog's sub breeds
2. Each dog breed name should be a link
   1. The link should take you to a different page (in the SPA)
   2. Render out a random picture of the dog breed
3. General styling of the application
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Notable Packages
- Axios: used to fetch API data
- React Router DOM: used to simulate navigation to other "pages" in an SPA
- 


### Features to add
- feature a certain number of breeds per page
 - create page up and page down buttons to see other breeds
 - let user change number of breeds shown on page
- search feature on header to dynamically update page based on user input
- animated drop down menu for breeds with subbreeds
   - each subbreed is a link to a page with an image
- loading spinner in case response from api is slow 
