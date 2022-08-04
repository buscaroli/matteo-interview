## The Challenge

We have created a very simple Connect 4 game using some of our favorite [front-end technologies](#technology-choices). The rules of the game are simple: the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally) wins. There is one issue that we'd like you to solve: the logic to determine a winner does not check for 4 in a row diagonally, you should implement this logic with tests. We've also come up with a list of [possible improvements](#possible-improvements). Feel free to implement as many or as few of these as you like or try something not on this list (you have complete creative freedom). We understand that your time is precious so try not to spend more than a couple of hours on this.

## Getting Started

`npm i` - install dependences

`npm start` - run the application

`npm t` - run the tests

## Possible Improvements

- Persist game state between sessions (hint - https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence)
- Record and present game stats
- Allow players to select their name and color
- Play againt a bot
- Increase unit test coverage
- Add end-to-end tests
- UX improvements
- Responsive styles
- Performance optimization

## Technology Choices

- React
- Typescript
- Create React App
- React Testing Library
- [Chakra UI](https://chakra-ui.com/docs/components)
- [RecoilJS](https://recoiljs.org/)

## Changelog

Minimum requirements met.

- implemented a function:
  - name: src/hooks/diagonalWinLogic/getDiagonalArray()
  - action: retrieves the arrays of the two diagonals that cross the position of the most recent coin
- called the new function getDiagonalArray() inside src/hooks/usePlayPiece.ts:
  - it is called within the testWin() logic to test if the player wins after each coin is added
- added two tests for the getDiagonalArray() function;
  - the first one tests that the player can win when four coins of the same colour are in the diagonal directed from the BottomLeft to the TopRight
  - the second one tests that the player can win when four coins of the same colour are in the diagonal directed from the TopLeft to the BottomRight

PS I am only adding this changelog in the README.md (and some comments here and there) as I am sure this branch will not be merged :)
