import { MarsRover } from '../src/marsRover';
import { North } from '../src/north';
import { West } from '../src/west';
import { East } from '../src/east';

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
    xCoordinate | yCoordinate | direction      | command     | expected
    ${0}        | ${0}        | ${new North()} | ${'M'}      | ${'0:1:N'}
    ${0}        | ${0}        | ${new North()} | ${'MM'}     | ${'0:2:N'}
    ${0}        | ${0}        | ${new North()} | ${'MMM'}    | ${'0:3:N'}
    ${0}        | ${0}        | ${new East()}  | ${'M'}      | ${'1:0:E'}
    ${0}        | ${0}        | ${new East()}  | ${'MM'}     | ${'2:0:E'}
    ${1}        | ${2}        | ${new East()}  | ${'MMM'}    | ${'4:2:E'}
    ${0}        | ${1}        | ${new North()} | ${'ML'}     | ${'0:2:W'}
    ${1}        | ${2}        | ${new North()} | ${'L'}      | ${'1:2:W'}
    ${1}        | ${2}        | ${new North()} | ${'LL'}     | ${'1:2:S'}
    ${1}        | ${2}        | ${new North()} | ${'LLL'}    | ${'1:2:E'}
    ${3}        | ${4}        | ${new West()}  | ${'R'}      | ${'3:4:N'}
    ${3}        | ${4}        | ${new West()}  | ${'RR'}     | ${'3:4:E'}
    ${3}        | ${4}        | ${new West()}  | ${'RRR'}    | ${'3:4:S'}
    ${3}        | ${4}        | ${new East()}  | ${'LLRRRL'} | ${'3:4:E'}
  `(
    'should be at position $expected after $command command when facing $direction',
    ({ xCoordinate, yCoordinate, direction, command, expected }) => {
      const marsRover = new MarsRover(xCoordinate, yCoordinate, direction);

      const position = marsRover.execute(command);

      expect(position).toBe(expected);
    }
  );
});
