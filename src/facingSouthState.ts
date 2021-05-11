import { Direction } from './direction';
import { Rover } from './marsRoverStatePattern';
import { FacingEastState } from './facingEastState';
import { FacingWestState } from './facingWestState';

export class FacingSouthState implements Direction {
  rotateLeft(rover: Rover): Direction {
    console.log('From South to East');
    rover.setDirection(rover.facingEastState);
    return new FacingEastState();
  }

  rotateRight(rover: Rover): Direction {
    console.log('From South to West');
    rover.setDirection(rover.facingWestState);
    return rover.getDirection;
  }

  toDirectionString(): string {
    return 'S';
  }
}
