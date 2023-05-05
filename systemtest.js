const Solver = require("./solver");

describe("Solver", () => {
  const arr = [
    [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ],
    [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
  ];
  const row = 2;
  const col = 2;
  const cell_size = 10;

  describe("depth_first_search()", () => {
    it("should find the path from start to end", () => {
      const solver = new Solver(arr, row, col, cell_size);

      while (!solver.depth_first_search());

      // Check the path is correct
      expect(solver.path).toEqual([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
      ]);
    });
  });

  describe("breadth_first_search()", () => {
    it("should find the path from start to end", () => {
      const solver = new Solver(arr, row, col, cell_size);

      while (!solver.breadth_first_search());

      // Check the path is correct
      expect(solver.path).toEqual([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
      ]);
    });
  });
});
