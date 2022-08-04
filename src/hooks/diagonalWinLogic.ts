import { boardRows, boardCols } from "const";

export const getDiagonalArray = (col: number, row: number, updatedBoard: number[][], upwards: boolean = true)  => {
  /*
  Matteo
  Creates and returns an array of the coins located in the diagonal of the last added coin.

  If upwards === true will check the diagonal BottomLeft to TopRight
  If upwards === false will check the diagonal from TopLeft to BottomRight
  
  Starts checking in a X position equal to "current -3" as only checking for the current coin which means we are only interested in the location -3 < coin < + 3.
  For the Y axis we either start from "-3" or "+3" depending on which diagonal we are checking.
  */

  let currentX = col - 3
  let currentY = upwards ? row - 3 : row + 3

  const diagArray: number[] = []

  for (let i = 0; i < 7; i++) {
    // validate the current position: needs to be within the edges of the board: 
    // 0 to boardCols
    // 0 to boardRows
    if (currentX >= 0 &&
        currentX < boardCols &&
        currentY >= 0 &&
        currentY < boardRows) {
          diagArray.push(updatedBoard[currentX][currentY])
    }
    currentX++
    currentY = upwards ? currentY + 1 : currentY - 1
  }
  return diagArray
}

