import { IDirection } from './IDirection';
import { Direction, MarsRover } from './marsRover';

export class South implements IDirection {
  rotateLeft(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.east);
    return marsRover.direction;
  }

  rotateRight(marsRover: MarsRover): IDirection {
    marsRover.setDirection(marsRover.west);
    return marsRover.direction;
  }

  toDirectionString(): string {
    return Direction.SOUTH;
  }
}
