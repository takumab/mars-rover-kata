import { MarsRover } from '../src/marsRover';

/*
 * Task: develop API that moves rovers around on plateau
 * Plateau: 5 X 5 grid
 * Rover state consists of two parts:
 *  - position on grid (x,y)
 *  - compass direction it's facing (N, E, S, W)
 * Input: string of one character move commands
 *  - (L,R) represent direction rover is facing
 *  - (M) moves rover 1 grid square in direction it's currently facing
 * Output: represents final position of rover after move commands executed
 *  - represented as coordinate pair (2:3:E) <- square (2,3) facing East
 *
 */

describe('Mars Rover', () => {
  it.each`
    xCoordinate | yCoordinate | direction | command  | expected
    ${0}        | ${0}        | ${'N'}    | ${'M'}   | ${'0:1:N'}
    ${0}        | ${0}        | ${'N'}    | ${'MM'}  | ${'0:2:N'}
    ${0}        | ${0}        | ${'N'}    | ${'MMM'} | ${'0:3:N'}
  `(
    'should return $expected when facing $direction and command is $command',
    ({ xCoordinate, yCoordinate, direction, command, expected }) => {
      const marsRover = new MarsRover(xCoordinate, yCoordinate, direction);

      const position = marsRover.execute(command);
      expect(position).toBe(expected);
    }
  );

  it('should be facing East to start', () => {
    const marsRover = new MarsRover(0, 0, 'E');
    const position = marsRover.execute('');
    expect(position).toBe('0:0:E');
  });

  it('should move forward one grid when facing East', () => {
    const marsRover = new MarsRover(0, 0, 'E');
    const position = marsRover.execute('M');
    expect(position).toBe('1:0:E');
  });

  it('should move forward two grids when facing East', () => {
    const marsRover = new MarsRover(1, 0, 'E');
    const position = marsRover.execute('MM');
    expect(position).toBe('3:0:E');
  });
});
