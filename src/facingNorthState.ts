import { Direction } from './direction';
import { Rover } from './marsRoverStatePattern';

export class FacingNorthState implements Direction {
  rotateLeft(rover: Rover): Direction {
    console.log('From North to West');
    rover.setDirection(rover.facingWestState);
    return rover.getDirection;
  }

  rotateRight(rover: Rover): Direction {
    console.log('From North to East');
    rover.setDirection(rover.facingEastState);
    return rover.getDirection;
  }

  toDirectionString(): string {
    return 'N';
  }
}
