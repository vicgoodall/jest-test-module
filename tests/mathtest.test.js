/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const { listenerCount } = require("process");
const { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn } = require("../scripts/mathscript");

jest.spyOn(window, "alert").mockImplementation(() => {})

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("mathgame.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})