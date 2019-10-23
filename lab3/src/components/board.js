import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import Row from "./row.js";
import Tile from "./tile.js";

const rows = 6;
const cols = 7;
const player1 = 1;
const player2 = 2;
const checkElements = arr => /([12]),\1,\1,\1/.test(arr.toString());

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /*
      Part 1:
      Add appropriate state values
      */
      gameOver: false,
      board: [[]],
      currPlayer: player1
    };

    this.placeToken = this.placeToken.bind(this);
  }

  createBoard() {
    /*
    Part 1:
    Initialize board with null values
    */
    let newBoard = Array(rows);
    for (let i = 0; i < newBoard.length; i++) {
        newBoard[i] = new Array(cols).fill(null);
    }
    this.setState({
        gameOver: false,
        board: newBoard,
        currPlayer: player1
    });
  }

  placeToken(col) {
    const { gameOver, board, currPlayer } = this.state;
    let newBoard = board;
    if (!gameOver) {
      /*
      Part 3:
      Place the token in the appropriate column, update the current player and update the state accordingly
      */

      for (let i = newBoard.length - 1; i >= 0; i--) {
          if (newBoard[i][col] == null) {
              newBoard[i][col] = currPlayer;

              /* so players cannot place outside the board lol */
              this.setState({
                  gameOver: this.checkTable(newBoard),
                  board: newBoard,
                  currPlayer: currPlayer == player1 ? player2 : player1
              });
              return;
          }
      }
    }
  }

  checkColumns(table) {
    return table.reduce(
      (hasMatch, column) => hasMatch || checkElements(column),
      false
    );
  }

  checkRows(table) {
    for (let i = 0; i < table[0].length; ++i) {
      let rowArray = table.map(column => column[i]);
      if (checkElements(rowArray)) return true;
    }
    return false;
  }

  checkDiagonal(table) {
      for (let i = 0; i < table.length - 3; i++) {
          for (let j = 0; j < table[i].length - 3; j++) {
              if (table[i][j] != null && table[i][j] == table[i+1][j+1] && table[i][j] == table[i+2][j+2] && table[i][j] == table[i+3][j+3]) {
                return true;
              }
          }
      }

      for (let i = 0; i < table.length - 3; i++) {
          for (let j = 3; j < table[i].length; j++) {
              if (table[i][j] != null && table[i][j] == table[i+1][j-1] && table[i][j] == table[i+2][j-2] && table[i][j] == table[i+3][j-3]) {
                return true;
              }
          }
      }

      return false;
  }

  checkTable(table) {
    return this.checkRows(table) || this.checkColumns(table) || this.checkDiagonal(table);
  }

  componentDidMount() {
    this.createBoard();
  }

  componentDidUpdate(prevProps, prevState) {
    const { board, gameOver, currPlayer } = this.state;
    /*
    Part 4:
    End the game if a player wins
    */
    if (!gameOver){
        if (this.checkTable(board)) {
            this.setState({gameOver: true});
        }
    }
  }

  render() {
    const { board, currPlayer, gameOver } = this.state;
    const playerColor = gameOver
      ? currPlayer === 1
        ? "yellow"
        : "red"
      : currPlayer === 1
      ? "red"
      : "yellow";
    return (
      <React.Fragment>
        <div className="flex justify-center">
          <Button
            color="primary"
            className="btn-block"
            onClick={() => {
              this.createBoard();
            }}
          >
            New Game
          </Button>
        </div>
        <div className="flex justify-center">
          <Table style={{ marginBottom: "0px" }} className="w-30 b--light-blue">
            <thead></thead>
            <tbody>
              {/*
                Part 2:
                Map rows in board to individual Row components with the .map function.
                Make sure to pass placeToken function so that the child component can call the function
              */
                this.state.board.map((row) => <Row row={row} placeToken={this.placeToken}/>)
              }
            </tbody>
          </Table>
          <h2 className={`flex justify-center w-20 ${playerColor}`}>
            {gameOver
              ? `Player ${currPlayer === 1 ? "2" : "1"} Won!`
              : `Player ${currPlayer}'s Turn!`}
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
