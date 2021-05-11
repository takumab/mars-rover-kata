import { Direction } from './direction';
import { Rover } from './marsRoverStatePattern';

export class FacingWestState implements Direction {
  rotateLeft(rover: Rover): Direction {
    console.log('From West to South');
    rover.setDirection(rover.facingSouthState);
    return rover.getDirection;
  }

  rotateRight(rover: Rover): Direction {
    console.log('From West to North');
    rover.setDirection(rover.facingNorthState);
    return rover.getDirection;
  }

  toDirectionString(): string {
    return 'W';
  }
}
