import { IDirection } from './IDirection';
import { Direction } from './marsRover';
import { South } from './south';
import { North } from './north';

export class West implements IDirection {
  rotateLeft(): IDirection {
    return new South();
  }

  rotateRight(): IDirection {
    return new North();
  }

  toDirectionString(): string {
    return Direction.WEST;
  }
}
