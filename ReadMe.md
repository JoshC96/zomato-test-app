# Zomato Test Application

Using Node/Express + React the application shows restaurants using filters and the Zomato API

## Preface Notes

 - .env is shown in github for demo purposes - this would be left out of a regular app for security purposes
 - React not yet created


 ## API Routes

 Using Express routes and the directory structure the app can ping /api/cuisines to get data - the /api/cuisines file will use the controllers/zomatoController to make requests to the API

axiosInstance will create an object of axios for easy authorization of the API. Create the instance once and reuse for all future requests.

## React App

Used ``` npx create-react-app ./ ``` inside /public directory to initialize React application