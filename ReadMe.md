# Zomato Test Application

Using Node/Express + React the application shows restaurants using filters and the Zomato API

## Preface Notes

 - .env is shown in github for demo purposes - this would be left out of a regular app for security purposes
 - Zomato API allows for only 1000 requests per day - my IP was tracked and I was limited in the first day of dev after a looped API request ate through the quota
 - Deployed to Heroku for public URL of the application



 ## API Routes

 Using Express routes and the directory structure the app can ping /api/cuisines to get data - the /api/cuisines file will use the controllers/zomatoController to make requests to the API

axiosInstance will create an object of axios for easy authorization of the API. Create the instance once and reuse for all future requests.

## React App

Used ``` npx create-react-app ./ ``` inside /public directory to initialize React application

Using SASS for styling - runs when ```npm run start``` is run - declared in package.json

