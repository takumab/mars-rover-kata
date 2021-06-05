import { IDirection } from './IDirection';
import { Direction } from './marsRover';
import { North } from './north';
import { South } from './south';

export class East implements IDirection {
  rotateLeft(): IDirection {
    return new North();
  }

  rotateRight(): IDirection {
    return new South();
  }

  toDirectionString(): string {
    return Direction.EAST;
  }
}
