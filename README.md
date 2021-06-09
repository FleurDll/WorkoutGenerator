# Workout Generator

_22/05/21_

## https://workoutgeneratorfd.herokuapp.com

This fullstack application generates custom workout sessions. <br>
Here are the features of this app :

- Generate a new workouts until you find the perfect one.
- The session is designed according to a particular sequence : 3 upperbody and 3 lowerbody exercises that never target the same muscle (we want to be able to survive it).
- Once you're ready, you can start the countdown. You'll see the pattern : 60s ou 45s of effort and a 15s break. You can pause the countdown.
- When the workout is over, you can save it and find it back in the "saved workouts" section. And play it again.
- Admin path to unlock to possibility to add or remove an exercise.

## Motivation

I used to take a paper and write down my sequence of sports exercises just before my workout. It has become boring and repetitive. <br>
I therefore imagined an application which had all my exercises in database and which could generate perfect workouts for me. <br>
So I created my server with Express and connected it to my MongoDB database. <br>
Then I created a React app and manage all the different actions with Redux (add/remove exercises, fetch exercises, fetch saved sessions, ...). <br>
Now my athletic life is simplified!

## Built With

- JavaScript
- [React](https://fr.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Styled Components](https://styled-components.com/)
- [useSound](https://www.npmjs.com/package/use-sound)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

## Database

MongoDB database with three collections :

- exercises
- saved sessions
- admin (password)
  I access them with axios with a Redux structure.

## Preview

- Desktop <br>

<p align="center">
  <a href="https://workoutgeneratorfd.herokuapp.com">
    <img src="https://user-images.githubusercontent.com/75179031/120809739-ae73ab80-c54a-11eb-9a8e-7cb36f235a4e.png" width="750" height="500">
  <a/>
</p>
  
<p align="center">
  <a href="https://workoutgeneratorfd.herokuapp.com">
    <img src="https://user-images.githubusercontent.com/75179031/120809761-b2073280-c54a-11eb-984c-913b592ed7ea.png" width="750" height="500">
  <a/>
</p>
    
<p align="center">
  <a href="https://workoutgeneratorfd.herokuapp.com">
    <img src="https://user-images.githubusercontent.com/75179031/120809744-afa4d880-c54a-11eb-9d83-6d943760f2f3.png" width="750" height="500">
  <a/>
</p>
      
<p align="center">
  <a href="https://workoutgeneratorfd.herokuapp.com">
    <img src="https://user-images.githubusercontent.com/75179031/120809755-b0d60580-c54a-11eb-9d16-5d12797bb2d9.png" width="750" height="500">
  <a/>
</p>

## ©2021, Fleur Dalle
