import { IDirection } from './IDirection';
import { Direction, MarsRover } from './marsRover';

export class East implements IDirection {
  rotateLeft(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.north);
    return marsRover.direction;
  }

  rotateRight(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.south);
    return marsRover.direction;
  }

  toDirectionString(): string {
    return Direction.EAST;
  }
}
