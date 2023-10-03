# Greeting Cards Project

## About the project

This project is a greeting card generator in Hebrew. It was submitted as a final project for INT College's Full-stack course.

The project supports user registration, admin page, and of course, greeting card generation from a number of predefined events and interests. In the future I might add the option for an admin to add more events and interests, with their respective greetings.

## Running the project

1. Clone the repository
2. Make sure MongoDB is running at port 27017
3. Create a `.env` file in the root directory with the line `IMGUR_CLIENT_ID=<your imgur client id>`
4. Run `npm install`
5. Run `npm start`

## Main libraries used

- [Express](https://expressjs.com/) for API creation

- [Mongoose](https://mongoosejs.com/) for an easier time working with MongoDB

- [Passport](http://www.passportjs.org/) for user authentication and authorization

- [html2canvas](https://html2canvas.hertzen.com/) to save the greeting cards as images (and optionally uploading them to imgur)

- [Slick](https://kenwheeler.github.io/slick/) for the nice carousel at the user's account page

- [Axios](https://github.com/axios/axios) to send the POST requests to the imgur API
