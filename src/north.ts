import { IDirection } from './IDirection';
import { Direction } from './marsRover';
import { West } from './west';
import { East } from './east';

export class North implements IDirection {
  rotateLeft(): IDirection {
    return new West();
  }

  rotateRight(): IDirection {
    return new East();
  }

  toDirectionString(): string {
    return Direction.NORTH;
  }
}
