# React/Redux Fox Tamagotchi

This is a port of my original [Fox Tamagotchi](https://github.com/learnsometing/fox-game-workshop-vanilla-js) game created during a workshop given by Microsoft's Brian Holt at Frontend Masters.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Getting started

1. Clone the repository: `git clone https://github.com/learnsometing/fox-game-react-redux.git && cd ./fox-game-react-redux`
2. Install: `npm i`
3. Start: `npm run start`

## Gameplay

### Start

To get started, press the middle button. This will hatch your new fox! 

### Actions

There are three actions in this game:

#### Feed (fish icon)

To keep your fox happy and well, it must be fed. It can only be fed when the fox is hungry, taking this action any other time will have no effect.

#### Clean Up Poop (poop icon)

After your fox eats, it will need to poop. After it's done pooping, clean up the poo by selecting the clean up poop action!

#### Change Weather (sun icon)
Every day, including the day the fox hatches, there is a 60% chance of rain. The weather can be toggled between sunny and rainy by taking the change weather action.

### Selecting an action

Click the left or right button to select one of the three actions denoted by the corresponding icon. To take the action, press the middle button.

### Death

If you wait too long to feed the fox while it is hungry, it will die. If the fox dies, you can restart the game by pressing the middle button. You can do better than this!

## Credits

Many thanks to Frontend Masters, Brian Holt, and Alice Brereton. 

Frontend masters approved and administered the workshop where the vanilla JS game was built.

Brian Holt gave the workshop at Frontend Masters where we build the original vanilla JS implementation of this game. 

Alice Brereton created all the amazing sprites and images used in the game.

## Authors

Brian Monaccio
