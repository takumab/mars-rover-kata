import { IDirection } from './IDirection';
import { Direction } from './marsRover';
import { East } from './east';
import { West } from './west';

export class South implements IDirection {
  rotateLeft(): IDirection {
    return new East();
  }

  rotateRight(): IDirection {
    return new West();
  }

  toDirectionString(): string {
    return Direction.SOUTH;
  }
}
