import { Direction } from './direction';
import { Rover } from './marsRoverStatePattern';

export class FacingEastState implements Direction {
  rotateLeft(rover: Rover): Direction {
    console.log('From East to North');
    rover.setDirection(rover.facingNorthState);
    return rover.getDirection;
  }

  rotateRight(rover: Rover): Direction {
    console.log('From East to South');
    rover.setDirection(rover.facingSouthState);
    return rover.getDirection;
  }

  toDirectionString(): string {
    return 'E';
  }
}
