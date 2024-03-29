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
    ${0}        | ${0}        | ${'E'}    | ${'M'}   | ${'1:0:E'}
    ${0}        | ${0}        | ${'E'}    | ${'MM'}  | ${'2:0:E'}
    ${1}        | ${2}        | ${'E'}    | ${'MMM'} | ${'4:2:E'}
    ${1}        | ${2}        | ${'N'}    | ${'L'}   | ${'1:2:W'}
    ${1}        | ${2}        | ${'N'}    | ${'LL'}  | ${'1:2:S'}
    ${1}        | ${2}        | ${'N'}    | ${'LLL'} | ${'1:2:E'}
    ${3}        | ${4}        | ${'W'}    | ${'R'}   | ${'3:4:N'}
  `(
    'should be at position $expected after $command command when facing $direction',
    ({ xCoordinate, yCoordinate, direction, command, expected }) => {
      const marsRover = new MarsRover(xCoordinate, yCoordinate, direction);

      const position = marsRover.execute(command);

      expect(position).toBe(expected);
    }
  );
});
