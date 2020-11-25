import React, { Component } from "react";
class Game extends Component {
  state = { letters: ["B", "I", "N", "G", "O"], bingoArray: [] };
  render() {
    this.generateRandomArray();
    return (
      <table>
        <thead>
          <tr>
            {this.state.letters.map((letter) => (
              <th key={letter}>{letter}</th>
            ))}
          </tr>
          {this.state.letters.map((letter, index) => (
            <tr key={letter}>
              {this.state.bingoArray[index].map((number) => (
                <td
                  id={number}
                  className="numberInsideBingo"
                  key={number}
                  onClick={() => this.handleClick(number)}
                >
                  {number}
                </td>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    );
  }
  generateRandomArray = () => {
    let { bingoArray } = this.state;
    //Uncomment the below for Production-Release

    // //For uniqueness, maintain an HashSet
    // var HashSet = {};
    // //1) Generate 25 random number
    // for (let i = 0; i < 25; i++) {
    //   let random_number = Math.floor(Math.random() * 100 + 1);
    //   while (HashSet[random_number]) {
    //     random_number = Math.floor(Math.random() * 100 + 1);
    //   }
    //   HashSet[random_number] = 1;
    // }
    // //2) Extract all the keys from HashSet
    // HashSet = Object.keys(HashSet);
    // //3) Push Them to a 2D array
    // let counter = 0;
    // for (let i = 0; i < 5; i++) {
    //   var row_arr = [];
    //   for (let j = 0; j < 5; j++) row_arr.push(parseInt(HashSet[counter++]));
    //   bingoArray.push(row_arr);
    // }
    bingoArray.push([1, 5, 10, 14, 16]);
    bingoArray.push([21, 23, 26, 27, 34]);
    bingoArray.push([40, 43, 45, 50, 58]);
    bingoArray.push([59, 61, 66, 67, 69]);
    bingoArray.push([85, 87, 88, 91, 98]);
  };
  handleClick = (number) => {
    //console.log("Number", number, "clicked");
    document.getElementById(number).style.textDecoration = "line-through";
  };
}

export default Game;
