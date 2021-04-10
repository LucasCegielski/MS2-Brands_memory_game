<h1 align="center">Code Institute Milestone Project 2 - Brands Memory Game</h1>

![Memory Game Mockup](assets/project/###.jpg)

Click [here](#) to see live project.

# Brands Memory Game

Aim of this project is to create a memory game using standard HTML and CSS structure, and by adding JS interactive features.

# Table of Content

1. [User experience](#user-experience)
    - [User Stories](#user-stories)
    - [Design](#design)
    - [Wireframe](#wireframe)
2. [Features](#features)
    - [Existing Features](#existing-features)
    - [Features left to Implement](#features-left-to-implement)
3. [Technologies Used](#technologies-used)
    - [Technologies](#technologies)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Libraries](#libraries)
    - [Other](#other)
4. [Testing](#testing)
5. [Bugs](#bugs)
6. [Deployment](#deployment)
7. [Credits](#credits)

# User Experience

## User Stories

- ### First Time Visitor Goals
    1. As a First Time Visitor, I want to be able to navigate the website with ease.
    2. As a First Time Visitor, I want to be able to find out how the game works.
    3. As a First Time Visitor, I want to be able to play the game.
    4. As a First Time Visitor, I want to be able to find out what my score is at the end of the game.

- ### Returning Visitor Goals
    1. As a Returning Visitor, I want to play the game and get better at it.
    2. As a Returning Visitor, I want to be able to beat my own time.
    3. As a Returning Visitor, I want to be able to beat my own score.

## Design

When choosing elements for this project, I decided to keep it eye catchy.
The colors and the music theme were chosen to brighten up the day of any user.

### Tune

- The reggae music theme was selected to make playing the game a positive experience.

- Free tune was taken from [Stockmusic](https://stockmusic.net/) website.

### Colour

- Colour palette used for this project was taken from [Coolors Website](https://coolors.co).

- Main colors used in the project are Violet (#5F0B78), Olive (#271F02), Gold (#B2A103), Citrine (#CBC507) and Dutch White (#E5D5B1).

- Colors picked for this project were selected to make the project eye catchy.

- The selected pallete can be viewed [here](https://coolors.co/5f0b78-271f02-b2a103-cbc507-e5d5b1)

![Color Palette](assets/project/color-palette.JPG)

### Typography

- [Font](https://fonts.google.com/) Indie Flower was used throughout the project.

- [Fontawesome](https://fontawesome.com/) icon was used for the icons of the memory game as well as for the Github link within the project.

## Wireframe

- Wireframe was developed using [Figma](https://www.figma.com/).

- Files saved from Figma, were converted from .fig into .jpg file with use of [Filestar](https://filestar.com/) application.

- Wireframe of this application can be seen in the documentation folder in this project in .jpg file.

[Top](#table-of-content)
# Features

This application allows users to easy navigate between the game and all it's features:

## Existing Features

- **Instructions** - the home page of the project displays game instructions to a user.

- **Play** - function available from the home page, allowing user to beging the game.

- **Play Music** - Tune starts playing when the page is first open. Controls panel allows user to turn the music on or off, to pause the music and even download the track.

- **Github** - link that allows user to access my Github repository and find my other projects.

- **Score** - simple count of points achived in the game.

- **Moves** - simple count of clicks in the game.

- **Time** - timer showing the amount of time spent playing the game.

## Features Left to Implement

- **Leaderboard** - feature will be added, allowing users to keep track of the overall score achived in this game.

- **Invite friend** - feature will be added, allowing user to invite friends to play the game.

[Top](#table-of-content)
# Technologies Used

## Technologies

- [Figma](https://www.figma.com/)
    - to provide wireframe.

- [Filestar](https://filestar.com/)
    - to convert the wireframe file from .fig to .jpg.

- [Fontawesome](https://fontawesome.com/)
    - to provide icons to the game.

- [Google Fonts](https://fonts.google.com/)
    - to provide free font to the app.

- [Freeformatter](https://www.freeformatter.com/html-formatter.html)
    - to beautify the HTML code.

- [W3C Validator](https://validator.w3.org/nu/#textarea)
    - to validate HTML code.

- [Jigsaw W3C Validator](https://jigsaw.w3.org/css-validator/validator)
    - to validate CSS code by input.

- [Am I responsive](http://ami.responsivedesign.is/#)
    - to test mobile devices responsiveness of my website.

- [Techsini](https://techsini.com/multi-mockup/)
    - to create this project mockup, of which image is placed at the very top of this readme file.
    
[Top](#table-of-content)





## Testing User Stories from User Experience (UX) Section

- ### First Time Visitor Goals
    1. As a First Time Visitor, I want to be able to navigate the website with ease.
        - Application is clean, free of extensive functions and in a color-pallete that is easy to read.
        - All the functions are placed in the screen, so that there is no need to unfold or scroll through menu.

    2. As a First Time Visitor, I want to be able to find out how the game works.
        - When entering the website, user is greeted with clear and simple instructions page, where the basics of the game are explained.
        - Last part of the instructions page gives user the ability to control the tune that is playing in the background.
        - Button placed at the bottom of the page allows you to jump into game without any further delays and immediately after reading the instructions.
        - Link to my github repository was placed to simply advertise my work to potential users.

    3. As a First Time Visitor, I want to be able to play the game.
        - The character of the brand icons, the color palette and the tune used were meant to be eye-catchy and pleasant to use.
        - There are no pop-up windows and user is able to jump straight into action without any delays.
        - The Instruction button is located conveniently just above the game screen, for easy access, should user need it.
        - User is able to track their time, score and amount of moves made in real time, thanks to the counters located at teh top of the game window.
        - User is able to control the tune while playing the game.
        - Thanks to Restart button located at the bottom of the page, user can restart the game at anytime. By doing so, user also restarts the counters.

    4. As a First Time Visitor, I want to be able to find out what my score is at the end of the game.
        - The pop-up window will display the final score, time spent in game and amount of moves when the game is finished.
        - In the future development, the said pop-up screen will allow user to invite other people to play the game and will allow the access to the leaderboard.
    
- ### Returning Visitor Goals
    1. As a Returning Visitor, I want to play the game and get better at it.
        - Thanks to the stats run by the application, user can see how they did each time they play.
        - User can come back anytime and play as many time as they want.
        - User can restart the game at any time using the restart button.
    
    2. As a Returning Visitor, I want to be able to beat my own time.
        - The time user has been playing the game is displaying in the real time in MM:SS format.
        - The final time is also displayed in the final pop-up that shows the final stats when the game is finished.

    3. As a Returning Visitor, I want to be able to beat my own score.
        - The current score is displayed during the game for the player to see.
        - The final score is also displayed in the final pop-up that shows the final stats when the game is finished.

    4. As a Returning Visitor, I want to be finish the game in fewer moves.
        - Time is displayed throughout the game with the clock that starts running the moment the user clicks on the first card.
        - The total time the user has been playing is also displayed in the final pop-up that shows the final stats when the game is finished.