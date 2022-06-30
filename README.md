# CV Maker
# 👉[Live Preview](https://cv-maker-new.web.app/)👈
![projectDemo](https://media.giphy.com/media/C0FQxhgtsVTbOJUO8X/giphy.gif)

## Note 
> While trying to add firebase hosting in my original cv-maker project, I ran into trouble. So I made this repo to copy the working files and start afresh with setting up hosting. Here's the original repo - https://github.com/nashitshayan/cv-project


## Description
> Build your own CV! CV-Maker allows users to build, customise, and print their own CV. With the edit/preview toggle, users can easily switch to see how the final CV would look like. No need to worry about the progress getting lost, all the changes will be saved and on the next login, user can continue from where they left off.  

## Learnings
1. Understanding and using various React Hooks - useState, useEffect, useContext
2. Using custom hook useDebounce for debouncing
4. Using React router
5. Understanding and implementing protected route
6. Using Firebase for authentication, database, and hosting
7. Understanding controlled components and event handling in React

## Technologies used
1. HTML
2. CSS
3. React.js
4. Bootstrap
5. React router
6. Firebase (firestore, auth, hosting)

## Challenges I faced
1. I had originally made this project using React Class components, but I was unsatisfied with it so I revamped the whole thing by starting from scratch, this time with React Hooks and took the design from <a href='https://www.goodcv.com/images/cv/screenshots/thumbs/en/outstanding_10.png?v=1.0.1' title='cv-design'>here</a>
2. Working with nested states
3. Setting and fetching data from firestore, had a lot of trouble with a particular bug. As React re renders twice during the initial load when using React.StrictMode, the fetched data was being reset.
4. This was my first time using firebase, so I relied a lot on their official documentation, blogs, guides for firestore db, auth and hosting

## Room for improvement
1. Perhaps a more modern looking UI
3. Improving the print feature - adding in other options.
4. The errors right now are very basic, they can be made more user friendly



## Credits
* <a href="https://fontello.com/" title="icons">Icons created by Fontello</a>

