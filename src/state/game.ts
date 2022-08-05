import { boardCols } from "const";
import { atom } from "recoil";
import { Board, Player } from "types";
import { playerColor, playerName } from "const";

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
});

export const playerOneDetails = atom<String[]>({
  key: 'playerOneDetails',
  default: [playerName[1], playerColor[1]]
})

export const playerTwoDetails = atom<String[]>({
  key: 'playerTwoDetails',
  default: [playerName[2], playerColor[2]]
})
