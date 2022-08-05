import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { boardState, gameOverState, playerState} from "state";
import OptionsModal from "./OptionsModal";

const GameControls: FC = () => {
  const board = useRecoilValue(boardState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
  };

  return (
    <>
      <Button onClick={handleReset} isDisabled={!board.some((col) => col.length)}>
        Reset
      </Button>
      <OptionsModal />
    </>
  );
};

export default GameControls;
