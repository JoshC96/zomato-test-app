# Zomato Test Application

Using Node/Express + React the application shows restaurants using filters and the Zomato API

## Preface Notes

 - .env is shown in github for demo purposes - this would be left out of a regular app for security purposes
 - Zomato API allows for only 1000 requests per day - my IP was tracked and I was limited in the first day of dev after a looped API request ate through the quota
 - [Deployed to Heroku for public URL of the application https://zomato-test-app.herokuapp.com/](https://zomato-test-app.herokuapp.com/)

 ## API Routes

 Using Express routes and the directory structure the app can ping /api/cuisines to get data - the /api/cuisines file will use the controllers/zomatoController to make requests to the API

axiosInstance will create an object of axios for easy authorization of the API. Create the instance once and reuse for all future requests.

## React App

Used ``` npx create-react-app ./ ``` inside /public directory to initialize React application

Using SASS for styling - runs when ```npm run start``` is run - declared in package.json

## Tools used

- Create-react-app with npx. Created excess files I would like to clean up
- [Axios for API GET requests](https://github.com/axios/axios)
- [Sass for CSS](https://sass-lang.com/)
- [Phone number formatter](https://www.npmjs.com/package/libphonenumber-js)
- [React noUISlider for rating sliders](https://www.npmjs.com/package/nouislider-react)


## License
            
This project is licenced under the MIT license. 
            
## Author

[Josh Campbell](https://github.com/JoshC96)

![avatar](https://avatars3.githubusercontent.com/u/31444107?s=60&v=4)