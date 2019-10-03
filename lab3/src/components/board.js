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
    };
  }
  
  createBoard() {
    /*
    Part 1:
    Initialize board with null values
    */
  }

  placeToken(col) {
    const { gameOver, board, currPlayer } = this.state;
    let newBoard = board;
    if (!gameOver) {
      /*
      Part 3:
      Place the token in the appropriate column, update the current player and update the state accordingly
      */
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

  checkTable(table) {
    return this.checkRows(table) || this.checkColumns(table);
  }

  componentDidMount() {
    this.createBoard();
  }

  componentDidUpdate(prevProps, prevState) {
    const { board, gameOver } = this.state;
    /*
    Part 4:
    End the game if a player wins 
    */
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
              */}
              <Tile/>
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
