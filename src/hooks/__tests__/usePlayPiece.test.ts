import { act, renderHook } from "@testing-library/react";
import { usePlayPiece } from "hooks";
import { RecoilRoot, useRecoilValue } from "recoil";
import { boardState, gameOverState, playerState } from "state";
import { Board, Player } from "types";

const render = () => {
  const { result } = renderHook(
    () => ({
      play: usePlayPiece(),
      board: useRecoilValue(boardState),
      player: useRecoilValue(playerState),
      gameOver: useRecoilValue(gameOverState),
    }),
    {
      wrapper: RecoilRoot,
    }
  );

  return {
    result,
    play: (col: number) => {
      act(() => {
        result.current.play(col);
      });
    },
    assertGame: (player: Player, gameOver: boolean, board: Board) => {
      expect(result.current.board).toEqual(board);
      expect(result.current.player).toEqual(player);
      expect(result.current.gameOver).toEqual(gameOver);
    },
  };
};

test("should win with 4 in a row vertically", () => {
  const { play, assertGame } = render();

  [0, 1, 0, 1, 0, 1, 0].forEach(play);

  // Player 1 won the game!
  assertGame(1, true, [[1, 1, 1, 1], [2, 2, 2], [], [], [], [], []]);

  play(1);
  // Can't play any more pieces after the game is over
  assertGame(1, true, [[1, 1, 1, 1], [2, 2, 2], [], [], [], [], []]);
});

test("should win with 4 in a row horizontally", () => {
  const { play, assertGame } = render();

  [0, 6, 1, 6, 3, 6, 4, 5, 2].forEach(play);

  // Player 1 won the game!
  assertGame(1, true, [[1], [1], [1], [1], [1], [2], [2, 2, 2]]);
});

test("should not play a piece when the column is full", () => {
  const { play, assertGame } = render();

  [0, 0, 0, 0, 0, 0].forEach(play);

  assertGame(1, false, [[1, 2, 1, 2, 1, 2], [], [], [], [], [], []]);

  play(0);
  // No change because column is full
  assertGame(1, false, [[1, 2, 1, 2, 1, 2], [], [], [], [], [], []]);
});

test("player 1 should win with 4 in a row in the BottomLeft to TopRight diagonal", () => {
  const { play, assertGame } = render();

  [0, 1, 1, 2, 2, 3, 2, 3, 2, 3, 3 ].forEach(play);

  assertGame(1, true, [[1], [2, 1], [2, 1, 1, 1], [2, 2, 2, 1], [], [], []]);
})

test("player 2 should win with 4 in a row in the TopLeft to BottomRight diagonal", () => {
  const { play, assertGame } = render();

  [0, 0, 0, 0, 1, 1, 2, 1, 5, 2, 5, 3].forEach(play);

  assertGame(2, true, [[1, 2, 1, 2], [1, 2, 2], [1, 2], [2], [], [1, 1], []]);
})

test("player should not be able to play a piece if a diagonal strike (BottomLeft to TopRight) is complete", () => {
  const { play, assertGame } = render();

  [0, 1, 1, 2, 2, 3, 2, 3, 2, 3, 3 ].forEach(play);

  assertGame(1, true, [[1], [2, 1], [2, 1, 1, 1], [2, 2, 2, 1], [], [], []]);

  play(0)

  assertGame(1, true, [[1], [2, 1], [2, 1, 1, 1], [2, 2, 2, 1], [], [], []])
})

test("player should not be able to play a piece if a diagonal strike (TopLeft to BottomRight) is complete", () => {
  const { play, assertGame } = render();

  [0, 0, 0, 0, 1, 1, 2, 1, 5, 2, 5, 3].forEach(play);

  assertGame(2, true, [[1, 2, 1, 2], [1, 2, 2], [1, 2], [2], [], [1, 1], []]);

  play(0)

  assertGame(2, true, [[1, 2, 1, 2], [1, 2, 2], [1, 2], [2], [], [1, 1], []])
})
