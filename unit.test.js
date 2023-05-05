const Cell = require("./cell");
const Solver = require("./solver");
//Test the constructor of Cell to ensure that it sets the properties correctly:
test("constructor sets properties correctly", () => {
  const cell = new Cell(1, 2, 10);
  expect(cell.x).toEqual(2);
  expect(cell.y).toEqual(1);
  expect(cell.cell_size).toEqual(10);
  expect(cell.wall).toEqual([true, true, true, true]);
  expect(cell.visited).toBeFalsy();
  expect(cell.previous).toBeUndefined();
  expect(cell.f).toEqual(0);
  expect(cell.g).toEqual(0);
  expect(cell.h).toEqual(0);
});
//Test constructor of Solver
describe("Solver class", () => {
  let arr;
  let solver;

  beforeEach(() => {
    arr = [
      [new Cell(0, 0, 10), new Cell(0, 1, 10), new Cell(0, 2, 10)],
      [new Cell(1, 0, 10), new Cell(1, 1, 10), new Cell(1, 2, 10)],
      [new Cell(2, 0, 10), new Cell(2, 1, 10), new Cell(2, 2, 10)],
      [new Cell(2, 0, 10), new Cell(2, 1, 10), new Cell(2, 2, 10)],
    ];
    solver = new Solver(arr, 3, 3, 10);
  });

  test("constructor sets properties correctly", () => {
    expect(solver.move).toEqual(arr[0][0]);
    expect(solver.move.visited).toBe(true);
    expect(solver.row).toBe(3);
    expect(solver.col).toBe(3);
    expect(solver.cell_size).toBe(10);
    expect(solver.neighbours).toEqual([]);
    expect(solver.travelled).toEqual([solver.move]);
    expect(solver.queue).toEqual([solver.move]);
    expect(solver.backtrack).toBe(undefined);
    expect(solver.end).toEqual(arr[2][2]);
    expect(solver.openset).toEqual([solver.move]);
    expect(solver.closedset).toEqual([]);
    expect(solver.update).toBe(false);
    expect(solver.path).toEqual([]);
  });
});
