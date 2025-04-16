const { exportAllDeclaration } = require("@babel/types");
const { default: TestRunner } = require("jest-runner");
const { describe } = require("yargs");
const { game } = require("../game.js");

beforeAll(() => {
  let fs = require("fs");
  let fileContent = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContent);
  document.close;
});

describe("game object contain correct keys", () => {
  test("score key exists", () => {
    expect("score" in game).toBe(true);
  });
});
